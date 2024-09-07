import { useRef } from 'react';
import { motion } from 'framer-motion';
import '../../css/herosection.css'
const AnimatedSVG = () => {

    return (
        <svg className='' width="100%" height="520" viewBox="0 0 510 549" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_281_128)">
                <g className="right-arrow-box">
                    <path className="" d="M245.535 527.205H199.092C189.103 527.205 181.007 519.117 181.007 509.139V462.748C181.007 452.77 189.103 444.683 199.092 444.683H245.535C255.523 444.683 263.621 452.77 263.621 462.748V509.139C263.621 519.115 255.524 527.205 245.535 527.205Z" fill="#E1E1E1"></path>
                    <path d="M203.822 484.485L215.809 498.036L243.817 471.807" stroke="#7341e8" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" className=""></path>
                </g>
                <g className="second-serch-box second-serch-box-anim">
                    <path d="M137.21 504.1H87.0409C77.5857 504.1 69.9219 496.443 69.9219 486.998V436.885C69.9219 427.44 77.5875 419.783 87.0427 419.783H137.212C146.667 419.783 154.333 427.44 154.333 436.885V486.998C154.329 496.443 146.665 504.1 137.21 504.1Z" fill="#E1E1E1"></path>
                    <path d="M93.4493 482.475C92.9472 482.475 92.4753 482.279 92.1227 481.927C91.3927 481.196 91.3927 480.008 92.1227 479.278L102.151 469.259C96.7435 462.525 97.2688 452.554 103.399 446.429C106.64 443.193 110.948 441.411 115.529 441.411C120.111 441.411 124.418 443.193 127.659 446.429C134.345 453.111 134.345 463.98 127.659 470.661C124.416 473.896 120.111 475.68 115.529 475.68C111.569 475.68 107.864 474.378 104.799 471.911L94.7723 481.927C94.4198 482.279 93.9497 482.475 93.4493 482.475ZM115.531 445.155C111.95 445.155 108.583 446.548 106.053 449.077C103.524 451.601 102.132 454.964 102.132 458.545C102.132 462.125 103.524 465.489 106.053 468.013C108.585 470.542 111.95 471.934 115.531 471.934C119.112 471.934 122.479 470.542 125.009 468.013C127.538 465.489 128.928 462.125 128.928 458.545C128.928 454.964 127.538 451.603 125.009 449.077C122.479 446.548 119.112 445.155 115.531 445.155Z" fill="black"></path>
                </g>
                <g className="wi-fi-box">
                    <path className="" d="M485.046 129.146H441.925C431.713 129.146 423.435 120.877 423.435 110.676V67.6027C423.435 57.4022 431.713 49.1333 441.925 49.1333H485.046C495.258 49.1333 503.536 57.4022 503.536 67.6027V110.676C503.536 120.875 495.258 129.146 485.046 129.146Z" fill="#E1E1E1"></path>
                    <path className="color_btn_anim_bule_one" d="M466.775 102.992C466.766 104.855 465.247 106.358 463.383 106.349C461.519 106.34 460.014 104.823 460.023 102.96C460.032 101.098 461.551 99.5951 463.415 99.604C465.279 99.6129 466.784 101.13 466.775 102.992Z" fill="white"></path>
                    <path className="color_btn_anim_bule_two" d="M456.652 98.6579C460.359 94.7698 466.385 94.6506 470.187 98.48C471.91 100.214 474.608 97.5462 472.884 95.8103C467.667 90.5579 459.104 90.59 453.979 95.9632C452.295 97.7294 454.962 100.429 456.652 98.6579Z" fill="white"></path>
                    <path className="color_btn_anim_bule_three" d="M449.71 91.6608C453.152 87.9452 457.973 85.617 463.071 85.5014C468.308 85.3822 473.364 87.5362 477.003 91.2713C478.711 93.0233 481.407 90.3535 479.701 88.6016C475.393 84.1816 469.289 81.567 463.089 81.7075C457.026 81.8463 451.15 84.5249 447.037 88.9662C445.381 90.7555 448.046 93.4573 449.71 91.6608Z" fill="white"></path>
                    <path className="color_btn_anim_bule_four" d="M445.185 82.9614C450.319 78.529 456.446 75.7384 463.308 75.7223C470.11 75.7063 476.816 78.1182 481.798 82.7907C483.579 84.4608 486.282 81.7964 484.496 80.1209C478.791 74.7672 471.138 71.9107 463.326 71.9303C455.429 71.9498 448.411 75.1745 442.512 80.2686C440.66 81.8676 443.344 84.5533 445.185 82.9614Z" fill="white"></path>
                </g>

                <g className="search-box">
                    <path d="M238.829 117.223H167.289C157.077 117.223 148.799 108.954 148.799 98.7538V27.2932C148.799 17.0927 157.077 8.82373 167.289 8.82373H238.829C249.041 8.82373 257.319 17.0927 257.319 27.2932V98.7538C257.319 108.954 249.041 117.223 238.829 117.223Z" fill="black" stroke="#E1E1E1" stroke-width="0.75" stroke-miterlimit="10"></path>
                    <g>
                        <path d="M198.964 76.8553C196.954 76.8553 194.915 76.5476 192.903 75.8984C182.52 72.5528 176.799 61.3918 180.148 51.0205C183.499 40.651 194.671 34.9327 205.054 38.2801C210.084 39.9022 214.18 43.3812 216.591 48.0804C219 52.7796 219.433 58.1333 217.81 63.158C215.106 71.5212 207.321 76.8553 198.964 76.8553ZM198.989 40.8822C192.134 40.8822 185.75 45.2559 183.537 52.1126C180.789 60.6181 185.481 69.7692 193.993 72.5136C202.509 75.2581 211.671 70.5714 214.417 62.0659C217.164 53.5622 212.474 44.4111 203.961 41.6666C202.312 41.1348 200.636 40.8822 198.989 40.8822Z" fill="#E1E1E1"></path>
                        <path d="M225.152 88.7244C224.671 88.7244 224.192 88.5305 223.841 88.1481L209.135 72.1527C208.469 71.4288 208.517 70.3047 209.242 69.6395C209.965 68.9761 211.094 69.0205 211.758 69.7462L226.464 85.7416C227.13 86.4655 227.082 87.5896 226.358 88.2548C226.014 88.5696 225.583 88.7244 225.152 88.7244Z" fill="#E1E1E1"></path>
                    </g>
                </g>
                <g className="cloud-box">
                    <path d="M372.816 154.429H301.276C291.064 154.429 282.786 146.16 282.786 135.96V64.4992C282.786 54.2987 291.064 46.0298 301.276 46.0298H372.816C383.028 46.0298 391.307 54.2987 391.307 64.4992V135.96C391.308 146.16 383.028 154.429 372.816 154.429Z" fill="black" stroke="#E1E1E1" stroke-width="0.75" stroke-miterlimit="10"></path>
                    <path className="color_btn_anim_green_second" d="M378.076 104.508C380.81 114.038 374.595 123.363 364.82 123.363H313.391C305.065 123.363 298.546 115.329 300.927 107.229C301.053 106.797 301.201 106.377 301.367 105.973C303.692 100.317 310.197 96.7883 316.121 97.9694C317.539 87.5554 326.516 78.7049 336.81 77.5736C347.104 76.4424 357.74 83.139 361.317 93.0034C361.317 93.0034 374.57 92.2848 378.076 104.508Z" fill="#7241c9"></path>
                    <path d="M334.586 132.473V112.754H326.853C325.947 112.754 325.416 111.731 325.941 110.991L338.673 93.0444C339.118 92.4183 340.048 92.4165 340.494 93.0409L353.212 110.843C353.739 111.581 353.21 112.608 352.302 112.608H344.775V132.473H334.586Z" fill="white"></path>
                </g>
                <g className="earth-box">
                    <path d="M490.842 285.325H419.302C409.09 285.325 400.812 277.056 400.812 266.856V195.395C400.812 185.195 409.09 176.926 419.302 176.926H490.842C501.054 176.926 509.332 185.195 509.332 195.395V266.856C509.332 277.056 501.054 285.325 490.842 285.325Z" fill="black" stroke="#E1E1E1" stroke-width="0.75" stroke-miterlimit="10"></path>
                    <g>
                        <path d="M456.463 264.049C438.265 264.049 423.461 249.261 423.461 231.084C423.461 212.906 438.265 198.118 456.463 198.118C474.662 198.118 489.466 212.906 489.466 231.084C489.466 249.261 474.662 264.049 456.463 264.049ZM456.463 199.897C439.248 199.897 425.242 213.888 425.242 231.084C425.242 248.28 439.248 262.27 456.463 262.27C473.679 262.27 487.685 248.28 487.685 231.084C487.685 213.888 473.679 199.897 456.463 199.897Z" fill="#7241c9"></path>

                        <path d="M455.47 263.939C455.294 263.841 451.114 261.484 447.008 256.159C443.233 251.261 438.826 242.818 439.284 230.413C439.741 218.021 444.453 209.939 448.326 205.342C452.542 200.335 456.624 198.295 456.796 198.211L457.583 199.806C457.427 199.885 441.9 207.826 441.064 230.479C440.229 253.123 456.175 262.295 456.335 262.386L455.47 263.939Z" fill="#7241c9"></path>
                        <path d="M456.932 263.918L455.997 262.404C456.152 262.308 471.597 252.47 470.758 229.8C469.925 207.163 455.06 199.883 454.911 199.812L455.667 198.202C456.321 198.508 471.663 205.964 472.539 229.734C473.413 253.479 457.095 263.816 456.932 263.918Z" fill="#7241c9"></path>
                        <path d="M456.9 220.631C443.532 220.631 434.918 216.099 430.046 212.296L431.141 210.895C435.794 214.525 444.04 218.854 456.9 218.854C469.344 218.854 477.231 214.548 481.656 210.935L482.783 212.312C478.134 216.108 469.868 220.631 456.9 220.631Z" fill="#7241c9"></path>
                        <path d="M481.739 250.296C477.087 246.773 468.837 242.574 455.968 242.574C443.52 242.574 435.628 246.752 431.201 250.257L430.096 248.865C434.745 245.183 443.007 240.795 455.968 240.795C469.332 240.795 477.943 245.192 482.813 248.879L481.739 250.296Z" fill="#7241c9"></path>
                        <path d="M488.622 230.29H425.151V232.069H488.622V230.29Z" fill="#7241c9"></path>
                    </g>
                </g>
                <g className="chaert-box">
                    <path d="M90.6983 208.629H19.1578C8.94589 208.629 0.667725 200.361 0.667725 190.16V118.699C0.667725 108.499 8.94589 100.23 19.1578 100.23H90.6983C100.91 100.23 109.188 108.499 109.188 118.699V190.16C109.188 200.359 100.91 208.629 90.6983 208.629Z" fill="black" stroke="#E1E1E1" stroke-width="0.75" stroke-miterlimit="10"></path>
                    <path d="M31.6579 176.016H17.9648V186.488H31.6579V176.016Z" fill="#7241c9" className="chart-one"></path>
                    <path d="M48.9887 151.867H35.2957V186.488H48.9887V151.867Z" fill="#7241c9" className="chart-two"></path>
                    <path d="M68.031 166.772H54.3379V186.489H68.031V166.772Z" fill="#7241c9" className="chart-three"></path>
                    <path d="M86.2165 141.821H72.5234V186.488H86.2165V141.821Z" fill="#7241c9" className="chart-four"></path>
                    <path d="M23.8907 165.233C20.1336 165.233 17.0745 162.179 17.0745 158.424C17.0745 154.671 20.1318 151.615 23.8907 151.615C27.6496 151.615 30.707 154.669 30.707 158.424C30.707 162.177 27.6496 165.233 23.8907 165.233ZM23.8907 153.394C21.1147 153.394 18.8551 155.649 18.8551 158.424C18.8551 161.199 21.1147 163.454 23.8907 163.454C26.6667 163.454 28.9264 161.199 28.9264 158.424C28.9264 155.651 26.6667 153.394 23.8907 153.394Z" fill="#7241c9"></path>
                    <path d="M43.4776 139.326C39.7205 139.326 36.6614 136.272 36.6614 132.518C36.6614 128.763 39.7187 125.709 43.4776 125.709C47.2348 125.709 50.2939 128.763 50.2939 132.518C50.2939 136.272 47.2366 139.326 43.4776 139.326ZM43.4776 127.489C40.7016 127.489 38.442 129.746 38.442 132.519C38.442 135.292 40.7016 137.549 43.4776 137.549C46.2536 137.549 48.5133 135.292 48.5133 132.519C48.5133 129.745 46.2536 127.489 43.4776 127.489Z" fill="#7241c9"></path>
                    <path d="M61.1949 155.733C57.4378 155.733 54.3787 152.679 54.3787 148.924C54.3787 145.171 57.436 142.115 61.1949 142.115C64.9538 142.115 68.0112 145.169 68.0112 148.924C68.0112 152.679 64.9538 155.733 61.1949 155.733ZM61.1949 143.896C58.4189 143.896 56.1593 146.153 56.1593 148.926C56.1593 151.699 58.4189 153.956 61.1949 153.956C63.9709 153.956 66.2306 151.699 66.2306 148.926C66.2306 146.153 63.9709 143.896 61.1949 143.896Z" fill="#7241c9"></path>
                    <path d="M80.1266 131.948C76.3694 131.948 73.3103 128.894 73.3103 125.14C73.3103 121.385 76.3676 118.331 80.1266 118.331C83.8837 118.331 86.9428 121.385 86.9428 125.14C86.941 128.894 83.8837 131.948 80.1266 131.948ZM80.1266 120.11C77.3506 120.11 75.0909 122.367 75.0909 125.14C75.0909 127.913 77.3488 130.17 80.1266 130.17C82.9026 130.17 85.1622 127.913 85.1622 125.14C85.1604 122.367 82.9026 120.11 80.1266 120.11Z" fill="#7241c9"></path>
                    <path d="M75.3641 128.952L64.3657 144.583L65.8225 145.606L76.8208 129.975L75.3641 128.952Z" fill="#7241c9"></path>
                    <path d="M48.6809 136.665L47.394 137.895L55.767 146.639L57.0539 145.41L48.6809 136.665Z" fill="#7241c9"></path>
                    <path d="M38.8082 137.063L26.4656 152.944L27.8721 154.035L40.2148 138.153L38.8082 137.063Z" fill="#7241c9"></path>
                </g>
                <g className="pesonal-fill-icon-box">
                    <path d="M96.8164 70.9501H63.4349C53.223 70.9501 44.9448 62.6812 44.9448 52.4807V19.1364C44.9448 8.93591 53.223 0.666992 63.4349 0.666992H96.8164C107.028 0.666992 115.307 8.93591 115.307 19.1364V52.4807C115.307 62.6812 107.028 70.9501 96.8164 70.9501Z" fill="black" stroke="#E1E1E1" stroke-width="0.75" stroke-miterlimit="10"></path>
                    <path d="M83.1804 35.4447C86.179 34.189 88.3122 31.0995 88.33 27.4586C88.3496 22.69 84.7367 18.809 80.2602 18.7877C75.7855 18.7663 72.1405 22.6153 72.1209 27.3839C72.1067 31.0586 74.2523 34.1836 77.2848 35.4447C64.8132 37.3212 65.3777 50.862 65.3777 50.862L94.8703 50.9972C94.8703 50.9989 95.5434 37.3105 83.1804 35.4447Z" fill="#ffffff"></path>
                    <path d="M94.9129 51.0417H94.872L65.3366 50.9066L65.3348 50.8639C65.333 50.8301 65.2084 47.4275 66.6133 43.8418C67.4378 41.7341 68.6237 39.975 70.1336 38.6144C71.9873 36.9424 74.3395 35.8717 77.1262 35.427C74.0403 34.0735 72.0621 30.9359 72.0781 27.3858C72.087 25.0682 72.9435 22.8929 74.4891 21.2619C76.0257 19.638 78.0628 18.7451 80.2245 18.7451C80.2369 18.7451 80.2494 18.7451 80.2619 18.7451C84.7562 18.7647 88.3958 22.6741 88.3762 27.4605C88.3602 30.9715 86.389 34.0806 83.3424 35.427C86.1041 35.8681 88.4296 36.946 90.2548 38.6304C91.7416 40.0035 92.9026 41.7786 93.7057 43.9058C95.0714 47.5271 94.92 50.9653 94.9183 51.0008L94.9129 51.0417ZM65.4221 50.8176L94.8292 50.9528C94.8417 50.5473 94.8969 47.3208 93.6202 43.9343C92.8225 41.8195 91.6686 40.0551 90.1925 38.6944C88.3459 36.9922 85.9866 35.9144 83.175 35.4911L83.0183 35.4662L83.1643 35.4057C86.2591 34.1091 88.2694 30.9911 88.2854 27.4605C88.305 22.7239 84.7046 18.8536 80.2601 18.834C80.2476 18.834 80.2352 18.834 80.2227 18.834C78.0842 18.834 76.072 19.7163 74.5514 21.3224C73.0218 22.9374 72.1742 25.0913 72.1636 27.3858C72.1493 30.9537 74.1668 34.1019 77.3007 35.4057L77.4485 35.4662L77.2918 35.4911C74.4552 35.9179 72.0674 36.9905 70.1942 38.6784C68.6949 40.0302 67.5179 41.7768 66.6988 43.8703C65.3829 47.2248 65.4132 50.4157 65.4221 50.8176Z" fill="#152735"></path>
                </g>
                <g className="twitter-box" style={{overflow: "hidden"}}>
                    <path d="M469.613 398.021H426.492C416.28 398.021 408.002 389.752 408.002 379.552V336.48C408.002 326.28 416.28 318.011 426.492 318.011H469.613C479.825 318.011 488.104 326.28 488.104 336.48V379.552C488.104 389.752 479.825 398.021 469.613 398.021Z" fill="black" stroke="#E1E1E1" stroke-width="0.75" stroke-miterlimit="10"></path>
                    <path className="twitter-box-sparrow" d="M428.415 371.885C432.429 374.455 437.194 375.954 442.313 375.954C459.147 375.954 468.657 361.752 468.084 349.013C469.854 347.738 471.392 346.142 472.609 344.325C470.981 345.045 469.234 345.532 467.402 345.749C469.273 344.631 470.71 342.855 471.387 340.739C469.635 341.776 467.694 342.532 465.63 342.937C463.976 341.176 461.619 340.077 459.01 340.077C453.159 340.077 448.857 345.532 450.178 351.197C442.642 350.82 435.961 347.215 431.49 341.733C429.115 345.804 430.258 351.131 434.296 353.826C432.81 353.78 431.41 353.371 430.189 352.693C430.091 356.891 433.102 360.814 437.461 361.689C436.184 362.036 434.786 362.115 433.367 361.844C434.519 365.444 437.867 368.061 441.836 368.134C438.027 371.12 433.225 372.452 428.415 371.885Z" fill="#E1E1E1"></path>
                </g>
                <g className="prsonal-box">
                    <path className="" d="M103.98 380.084H60.8602C50.6483 380.084 42.3701 371.815 42.3701 361.614V318.541C42.3701 308.34 50.6483 300.071 60.8602 300.071H103.982C114.194 300.071 122.472 308.34 122.472 318.541V361.614C122.47 371.815 114.192 380.084 103.98 380.084Z" fill="black" stroke="#E1E1E1" stroke-width="0.75" stroke-miterlimit="10"></path>
                    <path className="" d="M85.8958 339.664C89.3093 338.234 91.7381 334.718 91.7577 330.574C91.7808 325.145 87.6676 320.725 82.5714 320.702C77.477 320.679 73.3281 325.06 73.305 330.488C73.2872 334.672 75.732 338.229 79.1846 339.664C64.9859 341.801 65.6304 357.216 65.6304 357.216L99.206 357.371C99.206 357.371 99.9717 341.788 85.8958 339.664Z" fill="#7241c9"></path>
                </g>
                <g className="text-box-ami">
                    <path d="M306.256 548.333C299.006 548.333 293.106 542.44 293.106 535.198V451.343C293.106 444.101 299.006 438.208 306.256 438.208H404.619C411.868 438.208 417.767 444.101 417.767 451.343V535.198C417.767 542.44 411.868 548.333 404.617 548.333H306.256Z" fill="white"></path>
                    <path d="M404.619 438.877C411.511 438.877 417.101 444.458 417.101 451.345V535.199C417.101 542.085 411.513 547.668 404.619 547.668H306.258C299.365 547.668 293.776 542.086 293.776 535.199V451.345C293.776 444.46 299.364 438.877 306.256 438.877H404.619ZM404.619 437.543H306.256C298.637 437.543 292.44 443.734 292.44 451.345V535.199C292.44 542.81 298.639 549.002 306.258 549.002H404.619C412.238 549.002 418.436 542.81 418.436 535.199V451.345C418.436 443.733 412.238 437.543 404.619 437.543Z" fill="black"></path>
                    <path d="M350.797 481.271H305.642V526.375H350.797V481.271Z" fill="black"></path>
                    <path d="M408.687 484.012H362.183V487.871H408.687V484.012Z" fill="black"></path>
                    <path d="M408.687 492.934H362.183V496.793H408.687V492.934Z" fill="black"></path>
                    <path d="M408.687 501.853H362.183V505.712H408.687V501.853Z" fill="black"></path>
                    <path d="M408.687 510.774H362.183V514.634H408.687V510.774Z" fill="black"></path>
                    <path d="M408.687 519.696H362.183V523.556H408.687V519.696Z" fill="black"></path>
                    <path d="M417.101 469.039H293.776V451.238C293.776 444.41 299.317 438.875 306.153 438.875H404.546C411.479 438.875 417.101 444.49 417.101 451.416V469.039Z" fill="#E1E1E1"></path>
                </g>

                <g className="text-box-line">
                    <path d="M356.992 438.877V401.566" stroke="#E1E1E1" stroke-width="0.75" stroke-miterlimit="10"></path>
                    <path d="M362.182 438.877C362.182 441.739 359.859 444.06 356.994 444.06C354.129 444.06 351.805 441.739 351.805 438.877C351.805 436.015 354.129 433.694 356.994 433.694C359.859 433.693 362.182 436.014 362.182 438.877Z" fill="#E1E1E1"></path>
                </g>

                <g className="earth-box-line">
                    <path d="M400.425 233.326H353.993" stroke="#E1E1E1" stroke-width="0.75" stroke-miterlimit="10"></path>
                    <path d="M405.614 233.327C405.614 236.188 403.29 238.509 400.425 238.509C397.56 238.509 395.236 236.188 395.236 233.327C395.236 230.465 397.56 228.144 400.425 228.144C403.29 228.144 405.614 230.463 405.614 233.327Z" fill="#E1E1E1"></path>
                </g>

                <g className="serach-box-line">
                    <path d="M211.243 117.223C211.243 120.085 208.92 122.406 206.055 122.406C203.19 122.406 200.866 120.085 200.866 117.223C200.866 114.361 203.19 112.04 206.055 112.04C208.92 112.04 211.243 114.359 211.243 117.223Z" fill="#E1E1E1"></path>
                    <path d="M206.053 117.224V185.225" stroke="#E1E1E1" stroke-width="0.75" stroke-miterlimit="10"></path>
                </g>
                <g className="chrat-line">
                    <path d="M76.0989 209.907V248.595C76.0989 257.047 82.9579 263.9 91.4212 263.9H159.992" stroke="#E1E1E1" stroke-width="0.75" stroke-miterlimit="10"></path>
                    <path className="" d="M81.2877 209.907C81.2877 212.77 78.964 215.09 76.0989 215.09C73.2339 215.09 70.9102 212.768 70.9102 209.907C70.9102 207.045 73.2339 204.724 76.0989 204.724C78.964 204.724 81.2877 207.045 81.2877 209.907Z" fill="#E1E1E1"></path>
                </g>
                <path d="M380.471 393.659L357.229 311.939H154.06L127.588 393.385C125.983 398.323 129.621 403.404 134.764 403.404H227.56L231.317 399.652H275.147L278.904 403.404H373.214C378.235 403.404 381.859 398.54 380.471 393.659Z" fill="#E1E1E1"></path>
                <g opacity="0.3">
                    <path opacity="0.3" d="M380.471 393.659L357.229 311.939H154.06L127.588 393.385C125.983 398.323 129.621 403.404 134.764 403.404H227.56L231.317 399.652H275.147L278.904 403.404H373.214C378.235 403.404 381.859 398.54 380.471 393.659Z" fill="E1E1E1"></path>
                </g>
                <path d="M153.971 309.837V189.931C153.971 185.179 157.807 181.326 162.538 181.326H349.236C353.967 181.326 357.802 185.179 357.802 189.931V309.837H153.971Z" fill="#E1E1E1"></path>
                <path d="M345.477 193.189H166.297V299.812H345.477V193.189Z" fill="white" stroke="#E1E1E1" stroke-width="0.5" stroke-miterlimit="10" className=""></path>
                <path className="" d="M259.189 187.567C259.189 189.355 257.711 190.804 255.886 190.804C254.063 190.804 252.583 189.355 252.583 187.567C252.583 185.78 254.061 184.33 255.886 184.33C257.711 184.33 259.189 185.78 259.189 187.567Z" fill="#E1E1E1"></path>
                <g>
                    <path d="M380.471 390.637L357.229 308.917H154.06L127.588 390.363C125.983 395.3 129.621 400.382 134.764 400.382H227.56L231.317 396.629H275.147L278.904 400.382H373.214C378.235 400.382 381.859 395.517 380.471 390.637Z" fill="#E1E1E1"></path>
                    <g>
                        <path d="M342.816 314.159L165.75 313.564C163.9 313.556 162.267 314.563 161.751 316.027L147.559 356.249C146.788 358.435 148.777 360.621 151.541 360.621H356.433C359.184 360.621 361.173 358.453 360.423 356.271L346.787 316.646C346.283 315.179 344.665 314.165 342.816 314.159Z" fill="#ECECEC"></path>
                        <g opacity="0.1">
                            <path opacity="0.8" d="M287.822 391.334H217.932C215.061 391.334 212.966 388.375 213.692 385.346L217.642 368.838C218.145 366.732 219.889 365.265 221.881 365.265H284.312C286.351 365.265 288.121 366.798 288.582 368.966L292.092 385.474C292.727 388.469 290.642 391.334 287.822 391.334Z" fill="black"></path>
                        </g>
                        <path className="color_btn_anim_key_second" d="M287.585 326.88L285.765 318.463C285.64 317.885 285.127 317.473 284.536 317.473H273.635C272.87 317.473 272.284 318.149 272.391 318.906L273.594 327.339C273.683 327.958 274.214 328.418 274.841 328.417L286.356 328.401C287.157 328.399 287.754 327.661 287.585 326.88Z" fill="#152735"></path>
                        <path className="" d="M254.737 327.076L253.961 318.615C253.902 317.969 253.359 317.475 252.709 317.475H241.57C240.857 317.475 240.288 318.065 240.314 318.777L240.626 327.255C240.651 327.931 241.206 328.465 241.883 328.465L253.486 328.449C254.225 328.445 254.805 327.812 254.737 327.076Z" fill="#152735"></path>
                        <path className="" d="M272.019 326.99L270.813 318.552C270.724 317.934 270.193 317.475 269.568 317.475H256.75C256.011 317.475 255.43 318.11 255.498 318.844L256.274 327.3C256.333 327.947 256.878 328.442 257.528 328.44L270.776 328.422C271.54 328.422 272.127 327.744 272.019 326.99Z" fill="#152735"></path>
                        <path className="color_btn_anim_key" d="M190.724 327.216L192.445 319.531C192.682 318.476 191.877 317.473 190.797 317.473H180.237C179.482 317.473 178.82 317.972 178.612 318.698L176.409 326.398C176.101 327.478 176.913 328.552 178.037 328.55L189.075 328.534C189.867 328.534 190.551 327.986 190.724 327.216Z" fill="#152735"></path>
                        <path className="" d="M344.54 326.615L341.333 318.278C341.146 317.793 340.68 317.473 340.16 317.473H319.442C318.566 317.473 317.959 318.346 318.263 319.166L321.379 327.531C321.563 328.024 322.033 328.349 322.56 328.349L343.368 328.321C344.25 328.321 344.857 327.437 344.54 326.615Z" fill="#152735"></path>
                        <path className="color_btn_anim_key_second" d="M237.542 317.475H225.494C224.823 317.475 224.271 318.001 224.239 318.67L223.829 327.172C223.794 327.889 224.367 328.49 225.086 328.488L237.857 328.47C238.569 328.468 239.137 327.878 239.111 327.168L238.799 318.684C238.774 318.008 238.218 317.475 237.542 317.475Z" fill="#152735"></path>
                        <path className="" d="M175.15 317.475H166.749C166.035 317.475 165.4 317.923 165.157 318.593L162.385 326.313C161.99 327.414 162.807 328.573 163.979 328.572L172.948 328.559C173.701 328.557 174.363 328.059 174.572 327.334L176.776 319.627C177.084 318.547 176.272 317.475 175.15 317.475Z" fill="#152735"></path>
                        <path className="" d="M206.311 327.421L207.428 318.892C207.526 318.14 206.94 317.475 206.181 317.475H195.464C194.874 317.475 194.365 317.882 194.237 318.456L192.323 327.001C192.146 327.785 192.745 328.532 193.551 328.531L205.069 328.515C205.697 328.513 206.229 328.045 206.311 327.421Z" fill="#152735"></path>
                        <path className="" d="M208.993 318.567L207.878 327.09C207.78 327.842 208.366 328.509 209.127 328.507L221.053 328.491C221.723 328.49 222.275 327.965 222.307 327.296L222.718 318.789C222.752 318.072 222.18 317.473 221.463 317.473H210.24C209.609 317.474 209.075 317.94 208.993 318.567Z" fill="#152735"></path>
                        <path className="" d="M303.972 326.766L301.481 318.373C301.322 317.839 300.833 317.475 300.275 317.475H288.655C287.854 317.475 287.257 318.213 287.426 318.995L289.244 327.407C289.369 327.985 289.882 328.397 290.475 328.397L302.768 328.379C303.607 328.378 304.211 327.57 303.972 326.766Z" fill="#152735"></path>
                        <path className="" d="M319.442 326.663L316.322 318.291C316.139 317.8 315.669 317.473 315.145 317.473H304.474C303.634 317.473 303.03 318.28 303.269 319.086L305.758 327.474C305.916 328.008 306.408 328.374 306.965 328.372L318.265 328.356C319.141 328.354 319.748 327.483 319.442 326.663Z" fill="#152735"></path>
                        <path className="" d="M238.017 330.382L224.871 330.38C224.2 330.38 223.648 330.906 223.616 331.575L223.192 340.347C223.156 341.064 223.73 341.665 224.449 341.664L238.341 341.646C239.054 341.644 239.622 341.054 239.595 340.344L239.273 331.591C239.248 330.915 238.694 330.382 238.017 330.382Z" fill="#152735"></path>
                        <path className="color_btn_anim_key_second" d="M324.353 339.841L321.137 331.211C320.954 330.72 320.484 330.392 319.96 330.392L308.31 330.391C307.469 330.391 306.865 331.198 307.104 332.004L309.672 340.652C309.83 341.185 310.322 341.552 310.879 341.55L323.176 341.534C324.052 341.532 324.658 340.661 324.353 339.841Z" fill="#152735"></path>
                        <path className="" d="M307.884 339.944L305.315 331.29C305.156 330.756 304.666 330.391 304.109 330.391L291.447 330.39C290.646 330.39 290.049 331.128 290.218 331.91L292.093 340.583C292.218 341.161 292.731 341.574 293.324 341.574L306.68 341.556C307.519 341.556 308.123 340.748 307.884 339.944Z" fill="#152735"></path>
                        <path className="" d="M207.403 341.686L220.418 341.67C221.087 341.668 221.639 341.143 221.671 340.475L222.095 331.697C222.131 330.98 221.557 330.381 220.84 330.381L208.551 330.379C207.921 330.379 207.387 330.847 207.305 331.471L206.155 340.268C206.057 341.021 206.644 341.688 207.403 341.686Z" fill="#152735"></path>
                        <path className="color_btn_anim_key" d="M242.369 341.639L254.696 341.623C255.435 341.621 256.014 340.988 255.946 340.253L255.145 331.524C255.086 330.878 254.543 330.383 253.893 330.382L242.045 330.38C241.333 330.38 240.763 330.97 240.788 331.682L241.11 340.429C241.135 341.105 241.691 341.64 242.369 341.639Z" fill="#152735"></path>
                        <path className="" d="M256.684 331.755L257.485 340.478C257.544 341.125 258.089 341.62 258.738 341.62L272.658 341.602C273.422 341.6 274.009 340.924 273.901 340.168L272.658 331.465C272.569 330.846 272.04 330.388 271.413 330.388L257.935 330.386C257.196 330.384 256.616 331.019 256.684 331.755Z" fill="#152735"></path>
                        <path className="" d="M290.434 340.058L288.557 331.378C288.432 330.8 287.921 330.388 287.328 330.388L275.48 330.386C274.714 330.386 274.127 331.062 274.235 331.819L275.478 340.517C275.567 341.136 276.098 341.597 276.725 341.595L289.207 341.579C290.006 341.577 290.603 340.839 290.434 340.058Z" fill="#152735"></path>
                        <path className="" d="M188.448 330.375L162.198 330.371C161.678 330.371 161.212 330.691 161.025 331.175L157.606 340.042C157.289 340.865 157.898 341.749 158.781 341.749L186.472 341.714C187.059 341.712 187.568 341.304 187.697 340.732L189.675 331.904C189.849 331.12 189.253 330.375 188.448 330.375Z" fill="#152735"></path>
                        <path className="color_btn_anim_key_second" d="M190.597 341.707L203.343 341.691C203.973 341.691 204.506 341.223 204.588 340.597L205.74 331.794C205.838 331.042 205.252 330.377 204.493 330.377L192.572 330.375C191.984 330.375 191.473 330.782 191.345 331.357L189.369 340.177C189.192 340.963 189.791 341.709 190.597 341.707Z" fill="#152735"></path>
                        <path className="" d="M340.021 341.513L348.226 341.502C349.115 341.5 349.722 340.604 349.391 339.779L345.936 331.184C345.746 330.708 345.283 330.396 344.77 330.396L337.225 330.395C336.372 330.395 335.765 331.225 336.029 332.038L338.823 340.643C338.992 341.162 339.476 341.513 340.021 341.513Z" fill="#152735"></path>
                        <path className="" d="M336.985 339.875L334.189 331.262C334.022 330.745 333.539 330.394 332.995 330.394L324.255 330.393C323.379 330.393 322.772 331.266 323.076 332.086L326.289 340.709C326.472 341.201 326.942 341.527 327.469 341.527L335.79 341.516C336.645 341.516 337.248 340.686 336.985 339.875Z" fill="#152735"></path>
                        <path className="color_btn_anim_key_second" d="M206.188 356.47L219.091 356.491C220.102 356.493 220.936 355.7 220.984 354.691L221.425 345.529C221.477 344.45 220.615 343.548 219.534 343.548H207.385C206.434 343.548 205.631 344.252 205.508 345.193L204.313 354.334C204.167 355.465 205.047 356.468 206.188 356.47Z" fill="#152735"></path>
                        <path className="color_btn_anim_key_second" d="M349.884 343.548H330.071C328.751 343.548 327.836 344.862 328.297 346.098L331.78 355.445C332.056 356.185 332.761 356.674 333.552 356.676L353.541 356.708C354.875 356.71 355.792 355.372 355.308 354.131L351.648 344.752C351.364 344.026 350.664 343.548 349.884 343.548Z" fill="#152735"></path>
                        <path className="" d="M188.282 345.026L186.242 354.136C185.978 355.315 186.876 356.438 188.086 356.439L200.85 356.461C201.803 356.463 202.608 355.758 202.73 354.816L203.925 345.684C204.073 344.553 203.192 343.548 202.048 343.548H190.132C189.244 343.548 188.476 344.163 188.282 345.026Z" fill="#152735"></path>
                        <path className="" d="M170.959 344.923L168.266 354.332C167.969 355.372 168.751 356.409 169.833 356.411L182.867 356.432C183.633 356.434 184.296 355.904 184.463 355.157L186.612 345.561C186.842 344.533 186.051 343.56 184.997 343.574L172.504 343.74C171.785 343.749 171.156 344.231 170.959 344.923Z" fill="#152735"></path>
                        <path className="" d="M293.229 345.839L295.238 355.127C295.427 355.997 296.194 356.618 297.084 356.619L310.3 356.641C311.566 356.642 312.478 355.426 312.118 354.213L309.355 344.903C309.116 344.101 308.379 343.55 307.54 343.55H295.079C293.874 343.548 292.975 344.661 293.229 345.839Z" fill="#152735"></path>
                        <path className="color_btn_anim_key_dark" d="M222.949 345.348L222.506 354.517C222.454 355.594 223.315 356.496 224.394 356.498L291.664 356.607C292.871 356.608 293.772 355.495 293.518 354.317L291.511 345.038C291.322 344.168 290.553 343.546 289.661 343.546H224.841C223.831 343.548 222.998 344.341 222.949 345.348Z" fill="#152735"></path>
                        <path className="color_btn_anim_key_second" d="M156.254 344.53L152.631 354.368C152.271 355.346 152.994 356.383 154.037 356.385L164.967 356.402C165.638 356.404 166.227 355.959 166.413 355.316L169.231 345.46C169.506 344.503 168.786 343.55 167.789 343.55H157.663C157.034 343.548 156.471 343.941 156.254 344.53Z" fill="#152735"></path>
                        <path className="" d="M311.251 345.976L314.016 355.294C314.255 356.096 314.99 356.646 315.827 356.648L327.891 356.667C329.212 356.669 330.129 355.355 329.668 354.117L326.189 344.779C325.913 344.039 325.206 343.548 324.415 343.548H313.064C311.801 343.548 310.891 344.764 311.251 345.976Z" fill="#152735"></path>
                        <path className="" d="M357.954 309.223C357.954 309.479 312.407 309.686 256.235 309.686C200.044 309.686 154.506 309.477 154.506 309.223C154.506 308.969 200.044 308.761 256.235 308.761C312.407 308.761 357.954 308.967 357.954 309.223Z" fill="#152735"></path>
                        <path className="leptop-roted-animate-one" d="M216.489 223.817C218.377 222.254 220.446 220.973 222.629 219.986L223.01 213.293L233.961 211.461L236.504 217.665C238.89 217.887 241.263 218.424 243.559 219.289L248.564 214.826L257.604 221.267L255.013 227.446C256.579 229.333 257.861 231.4 258.849 233.58L265.549 233.961L267.383 244.899L261.173 247.441C260.95 249.825 260.412 252.194 259.547 254.486L264.013 259.488L257.567 268.518L251.379 265.928C249.49 267.492 247.423 268.772 245.239 269.758L244.858 276.451L233.908 278.283L231.363 272.079C228.977 271.857 226.605 271.318 224.31 270.455L219.305 274.918L210.264 268.477L212.857 262.296C211.292 260.409 210.01 258.344 209.021 256.164L202.321 255.783L200.487 244.844L206.698 242.303C206.92 239.919 207.46 237.55 208.323 235.257L203.858 230.258L210.303 221.227L216.489 223.817ZM224.529 237.554C220.709 242.904 221.954 250.335 227.312 254.15C232.668 257.965 240.108 256.72 243.925 251.37C247.745 246.02 246.498 238.589 241.142 234.775C235.786 230.96 228.348 232.203 224.529 237.554Z" fill="#E1E1E1"></path>

                        <path className="leptop-roted-animate-two" d="M276.833 251.676C278.112 250.617 279.511 249.751 280.989 249.082L281.247 244.55L288.662 243.311L290.384 247.51C291.999 247.661 293.605 248.024 295.159 248.609L298.548 245.587L304.668 249.947L302.914 254.13C303.974 255.407 304.841 256.807 305.51 258.283L310.047 258.541L311.288 265.947L307.084 267.667C306.933 269.281 306.57 270.885 305.984 272.438L309.007 275.824L304.643 281.937L300.455 280.185C299.177 281.244 297.775 282.11 296.297 282.779L296.039 287.311L288.625 288.55L286.903 284.349C285.288 284.198 283.681 283.835 282.127 283.25L278.738 286.272L272.618 281.912L274.374 277.729C273.315 276.452 272.446 275.052 271.778 273.576L267.241 273.318L266 265.912L270.204 264.192C270.355 262.579 270.72 260.974 271.304 259.422L268.281 256.037L272.645 249.924L276.833 251.676ZM282.275 260.976C279.689 264.599 280.532 269.629 284.159 272.212C287.784 274.794 292.821 273.953 295.407 270.33C297.992 266.709 297.15 261.677 293.523 259.094C289.898 256.512 284.862 257.355 282.275 260.976Z" fill="#E1E1E1"></path>
                        <path className="leptop-roted-animate-three" d="M273.354 208.367C274.486 207.43 275.726 206.663 277.033 206.071L277.261 202.06L283.824 200.963L285.348 204.68C286.778 204.814 288.201 205.136 289.575 205.653L292.576 202.978L297.994 206.838L296.442 210.541C297.38 211.672 298.147 212.91 298.74 214.217L302.756 214.445L303.854 221.001L300.133 222.524C299.999 223.952 299.677 225.371 299.159 226.746L301.835 229.743L297.971 235.156L294.262 233.605C293.13 234.542 291.89 235.309 290.581 235.899L290.354 239.91L283.79 241.007L282.266 237.29C280.836 237.157 279.415 236.835 278.039 236.317L275.038 238.99L269.62 235.131L271.173 231.428C270.234 230.296 269.467 229.058 268.874 227.751L264.858 227.523L263.76 220.967L267.481 219.445C267.615 218.017 267.937 216.597 268.455 215.222L265.779 212.225L269.643 206.813L273.354 208.367ZM278.172 216.599C275.882 219.806 276.63 224.258 279.841 226.545C283.051 228.831 287.508 228.085 289.798 224.879C292.088 221.672 291.34 217.22 288.13 214.932C284.919 212.647 280.462 213.394 278.172 216.599Z" fill="#E1E1E1"></path>
                    </g>
                </g>
            </g>
            <defs>
                <clipPath id="clip0_281_128">
                    <rect width="100%" height="549" fill="white"></rect>
                </clipPath>
            </defs>
        </svg>
    );
};

export default AnimatedSVG;