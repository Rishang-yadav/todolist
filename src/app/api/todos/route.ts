import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Todo from "@/models/Todo";
export async function POST(req: NextRequest, res: NextResponse) {
  console.log("Api call post");

  try {
    const body = await req.json();
    console.log(body, "hero");

    await dbConnect();
    console.log("Database connected");
    const title = body;
  
    console.log("ddddddddd", title)
    const response = await Todo.create(title);

    console.log("Data saved to database:", response);
    return NextResponse.json({ message: "Data add successfully" });
  } catch (error: any) {
    console.error("Error :", error);
    return NextResponse.json(
      { message: "Failed add", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  console.log("Api call for get request");

  try {
    await dbConnect();
    console.log("Database connected");

    const response = await Todo.find({});
    console.log("Data get route:", response);

    return NextResponse.json({ message: "Data add successfully", response });
  } catch (error: any) {
    console.error("Error uploading image:", error);
    return NextResponse.json(
      { message: "Failed to upload image", error: error.message },
      { status: 500 }
    );
  }
}
