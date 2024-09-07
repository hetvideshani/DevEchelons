'use client';
import React, { useRef, ChangeEvent, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import '../../css/Otpverification.css';
import { useRouter } from 'next/navigation';
import { global_email } from '../globals';

const OtpPage = ({isLogin = false}:{isLogin:boolean}) => {
    const router = useRouter();
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
    const [userEmail, setUserEmail] = useState("");
    const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log(global_email);
        console.log("call thai gyu USEEFFECT");
        setUserEmail(global_email);
    }, []);

    useEffect(()=>{
        if (userEmail){
            generateOtp();
        }
    },[userEmail]);

    // const checkJwt = async () => {
    //     const data = await fetch("/api/user/checkuser");
    //     const res = await data.json();

    //     if (res.success) {
    //         setUserEmail(res.data.email);
    //         return true;
    //     }
    //     setUserEmail(global_email);
    //     return false;
    // };

    const generateOtp = async () => {
        console.log(userEmail);
        const res = await fetch("/api/user/sendmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: userEmail
            })
        });

        const data = await res.json();
        console.log(data);
        if (data.success) {
            alert("OTP generated and saved to database successfully " + data.code);
        } else {
            alert(data.error);
        }
    };

    const changeFocus = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        let { value } = event.target;
        value = value.replace(/\D/g, '');
        if (value.length > 1) {
            value = value.slice(0, 1);
        }

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value.length === 1 && index < inputsRef.current.length - 1) {
            inputsRef.current[index + 1]?.focus();
        }

        if (newOtp.every(digit => digit !== "" && /\d/.test(digit))) {
            handleSubmit(newOtp.join(""));
        }
    };

    const handleSubmit = async (otpValue: string) => {
        setLoading(true);
        const res = await fetch("/api/user/checkmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: userEmail,
                otp: otpValue
            })
        });

        const data = await res.json();
        setLoading(false);
        if (data.success) {
            if(isLogin){
                router.push("/dashboard");
            }
            router.push("/detailForm");
        } else {
            alert("Incorrect OTP");
            setOtp(Array(6).fill(""));
            inputsRef.current[0]?.focus();
        }
    };

    return (
        <div className='otp-background-img'>
            <div className='background-div-content'>
                <Navbar />
                <div className='grid place-items-center mt-36'>
                    <h1 className='font-bold text-3xl tracking-normal'>We sent you a code</h1>
                    <p className='tracking-wider mt-2'>Please, enter it below to verify your email</p>
                    <p className='mt-2 text-custom-pink'>{userEmail}</p>
                    <div className='flex gap-5 mt-10'>
                        {[...Array(6)].map((_, i) => (
                            <input
                                key={i}
                                type='number'
                                className='otpinput'
                                maxLength={1}
                                inputMode='numeric'
                                pattern='[0-9]*'
                                ref={(el: any) => inputsRef.current[i] = el}
                                onChange={changeFocus(i)}
                                value={otp[i]}
                                aria-label={`OTP digit ${i + 1}`}
                            />
                        ))}
                    </div>
                    {!loading ? (
                        <button
                            className={`mt-5 px-4 py-2 cursor-pointer rounded ${otp.every(digit => digit !== "" && /\d/.test(digit)) ? 'bg-custom-blue text-white' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}
                            onClick={() => handleSubmit(otp.join(""))}
                            disabled={!otp.every(digit => digit !== "" && /\d/.test(digit)) || loading}
                        >
                            Submit
                        </button>
                    ) : (
                        <button
                            className={`mt-5 px-4 py-2 rounded ${otp.every(digit => digit !== "" && /\d/.test(digit)) ? 'bg-custom-blue text-white' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}
                            disabled={!otp.every(digit => digit !== "" && /\d/.test(digit)) || loading}
                        >
                            Loading...
                        </button>
                    )}
                    <p className='tracking-wider mt-5'>Didn't receive the code yet? <span className='text-custom-blue cursor-pointer' onClick={generateOtp}>Send Again</span></p>
                </div>
            </div>
        </div>
    );
};

export default OtpPage;
