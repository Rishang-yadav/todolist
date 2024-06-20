import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Todo from "@/models/Todo";

export async function DELETE(req: NextRequest, res: NextResponse) {
  console.log("API call for delete");

  let request;
  try {
    request = await req.json();
    console.log(request, "request");
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid JSON input" },
      { status: 400 }
    );
  }

  const  {id}  = request;
  await dbConnect();

  try {
    if (id) {
      const resp = await Todo.findByIdAndDelete(id);
      if (!resp) {
        return NextResponse.json(
          { message: "Todo not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ resp: resp }, { status: 200 });
    } else {
      throw new Error("Error Deletion Record!");
    }
  } catch (error) {
    return NextResponse.json(
      { message: (error as { message: string }).message },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest,res:NextResponse) {
  const req = await request.json();
  console.log(req,"data")

  await dbConnect();
  try {
    console.log("update api call")
    const todo = await Todo.findByIdAndUpdate(
      req.id,
      { title: req.title, completed: req.completed },
      { new: true }
    );
    console.log(todo,"ssssss");
    const updated = await todo.save();
    console.log(todo,"updated successfully");
    return NextResponse.json({ message: "Data update successfully",updated });
  } catch (error) {
    return NextResponse.json({
      message: (error as { message: string }).message,
    });
  }
}
