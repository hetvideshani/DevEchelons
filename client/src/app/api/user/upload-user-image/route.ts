import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function PUT(req: Request) {
	try {
		const data = await req.formData();
		const file = data.get("file") as File | null;
		const fileName: string = Math.random().toString(36).substring(2, 17);

		if (!file) {
			return NextResponse.json({ success: false, message: "No file uploaded", filePath: null }, { status: 400 });
		}

		const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/svg+xml'];
		if (!allowedTypes.includes(file.type)) {
			return NextResponse.json({ success: false, message: "Invalid file type", filePath: null }, { status: 400 });
		}

		const maxSize = 5 * 1024 * 1024;
		if (file.size > maxSize) {
			return NextResponse.json({ success: false, message: "File too large", filePath: null }, { status: 400 });
		}

		const byteData = await file.arrayBuffer();
		const buffer = Buffer.from(byteData);

		const filePath = path.join(process.cwd(), 'public', 'assets', 'images', 'avatar', `${fileName}.${file.type.split('/')[1]}`);
		try {
			await writeFile(filePath, buffer);
		} catch (err) {
			return NextResponse.json({ success: false, message: "Can't upload this image.", filePath: null }, { status: 400 });
		}
		return NextResponse.json({ success: true, message: "File uploaded successfully!", filePath }, { status: 201 });
	} catch (error) {
		console.error("Error uploading file:", error);
		return NextResponse.json({ success: false, message: "An error occurred during file upload", filePath: null }, { status: 500 });
	}
}
