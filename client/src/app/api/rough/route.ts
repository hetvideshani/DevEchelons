import { NextApiRequest, NextApiResponse } from 'next';
import User from "@/model/User"; // Ensure this path is correct based on your project structure
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
	try {

		console.log("Request received");

		// Find the user by email
		const user = await User.findOne({ email: "hemang@gmail.com" });

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		user.streak.date = 
		[
			"2024-04-18T07:35:14.423Z",
			"2024-11-22T02:16:34.789Z",
			"2024-06-30T14:45:29.123Z",
			"2024-08-01T22:59:58.456Z",
			"2024-01-09T13:22:40.567Z",
			"2024-03-15T08:11:27.890Z",
			"2024-12-05T19:03:14.345Z",
			"2024-05-25T05:27:48.123Z",
			"2024-10-14T17:45:36.456Z",
			"2024-07-09T11:14:58.789Z",
			"2024-09-23T09:18:47.012Z",
			"2024-02-11T20:23:32.345Z",
			"2024-03-08T06:28:19.678Z",
			"2024-11-03T21:46:29.901Z",
			"2024-06-02T18:54:50.234Z",
			"2024-04-01T12:30:21.567Z",
			"2024-08-28T15:45:14.890Z",
			"2024-12-19T23:08:45.123Z",
			"2024-07-19T04:16:57.456Z",
			"2024-01-21T09:22:35.789Z",
			"2024-05-13T01:47:20.012Z",
			"2024-09-07T03:18:09.345Z",
			"2024-10-22T07:27:34.678Z",
			"2024-02-25T16:43:22.901Z",
			"2024-03-30T10:12:41.234Z",
			"2024-12-09T00:09:15.567Z",
			"2024-11-18T08:20:57.890Z",
			"2024-04-26T13:25:48.123Z",
			"2024-06-15T22:59:37.456Z",
			"2024-08-07T14:42:18.789Z",
			"2022-04-18T07:35:14.423Z",
			"2022-11-22T02:16:34.789Z",
			"2022-06-30T14:45:29.123Z",
			"2022-08-01T22:59:58.456Z",
			"2022-01-09T13:22:40.567Z",
			"2022-03-15T08:11:27.890Z",
			"2022-12-05T19:03:14.345Z",
			"2022-05-25T05:27:48.123Z",
			"2022-10-14T17:45:36.456Z",
			"2022-07-09T11:14:58.789Z",
			"2022-09-23T09:18:47.012Z",
			"2022-02-11T20:23:32.345Z",
			"2022-03-08T06:28:19.678Z",
			"2022-11-03T21:46:29.901Z",
			"2022-06-02T18:54:50.234Z",
			"2022-04-01T12:30:21.567Z",
			"2022-08-28T15:45:14.890Z",
			"2022-12-19T23:08:45.123Z",
			"2022-07-19T04:16:57.456Z",
			"2022-01-21T09:22:35.789Z",
			"2022-05-13T01:47:20.012Z",
			"2022-09-07T03:18:09.345Z",
			"2022-10-22T07:27:34.678Z",
			"2022-02-25T16:43:22.901Z",
			"2022-03-30T10:12:41.234Z",
			"2022-12-09T00:09:15.567Z",
			"2022-11-18T08:20:57.890Z",
			"2022-04-26T13:25:48.123Z",
			"2022-06-15T22:59:37.456Z",
			"2022-08-07T14:42:18.789Z",
			"2022-07-25T06:17:14.890Z",
			"2022-05-07T12:34:24.789Z",
			"2022-01-29T15:47:38.567Z",
			"2022-03-12T22:17:14.234Z",
			"2022-06-18T09:23:56.012Z",
			"2022-10-02T13:15:29.456Z",
			"2022-12-14T07:52:17.789Z",
			"2022-11-25T03:48:23.456Z",
			"2022-04-09T20:22:12.567Z",
			"2022-09-29T18:43:27.123Z",
			"2022-02-07T08:15:30.890Z",
			"2022-08-15T16:32:45.234Z",
			"2022-05-19T21:14:38.567Z",
			"2022-07-31T11:29:14.789Z",
			"2022-03-28T10:44:59.012Z",
			"2022-06-05T14:19:47.345Z",
			"2022-12-23T09:12:56.678Z",
			"2022-10-17T17:55:34.123Z",
			"2022-01-15T23:39:47.890Z",
			"2022-11-09T07:33:23.456Z",
			"2023-04-18T07:35:14.423Z",
			"2023-11-22T02:16:34.789Z",
			"2023-06-30T14:45:29.123Z",
			"2023-08-01T22:59:58.456Z",
			"2023-01-09T13:22:40.567Z",
			"2023-03-15T08:11:27.890Z",
			"2023-12-05T19:03:14.345Z",
			"2023-05-25T05:27:48.123Z",
			"2023-10-14T17:45:36.456Z",
			"2023-07-09T11:14:58.789Z",
			"2023-09-23T09:18:47.012Z",
			"2023-02-11T20:23:32.345Z",
			"2023-03-08T06:28:19.678Z",
			"2023-11-03T21:46:29.901Z",
			"2023-06-02T18:54:50.234Z",
			"2023-04-01T12:30:21.567Z",
			"2023-08-28T15:45:14.890Z",
			"2023-12-19T23:08:45.123Z",
			"2023-07-19T04:16:57.456Z",
			"2023-01-21T09:22:35.789Z",
			"2023-05-13T01:47:20.012Z",
			"2023-09-07T03:18:09.345Z",
			"2023-10-22T07:27:34.678Z",
			"2023-02-25T16:43:22.901Z",
			"2023-03-30T10:12:41.234Z",
			"2023-12-09T00:09:15.567Z",
			"2023-11-18T08:20:57.890Z",
			"2023-04-26T13:25:48.123Z",
			"2023-06-15T22:59:37.456Z",
			"2023-08-07T14:42:18.789Z",
			"2023-07-25T06:17:14.890Z",
			"2023-05-07T12:34:24.789Z",
			"2023-01-29T15:47:38.567Z",
			"2023-03-12T22:17:14.234Z",
			"2023-06-18T09:23:56.012Z",
			"2023-10-02T13:15:29.456Z",
			"2023-12-14T07:52:17.789Z",
			"2023-11-25T03:48:23.456Z",
			"2023-04-09T20:22:12.567Z",
			"2023-09-29T18:43:27.123Z",
			"2023-02-07T08:15:30.890Z",
			"2023-08-15T16:32:45.234Z",
			"2023-05-19T21:14:38.567Z",
			"2023-07-31T11:29:14.789Z",
			"2023-03-28T10:44:59.012Z",
			"2023-06-05T14:19:47.345Z",
			"2023-12-23T09:12:56.678Z",
			"2023-10-17T17:55:34.123Z",
			"2023-01-15T23:39:47.890Z",
			"2023-11-09T07:33:23.456Z"
		];

		// Save the updated user
		await user.save();

		// Return the updated user data
		return NextResponse.json({ userdata: user },{status: 200});
	} catch (error) {
		console.error("Error updating user streak:", error);
		return NextResponse.json({ message: "Internal server error"},{status: 500});
	}
}
