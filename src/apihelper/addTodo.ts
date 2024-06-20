
"use server";
import axios from "axios";

export async function AddTodo(
    newTodo: string
): Promise<{ data?: any; error: string | null } | undefined> {
  try {
    const response = await axios.post(
        `http://localhost:3000/api/todos`,
      newTodo
    );
    if (response.status === 200) {
      return { data: response.data, error: null };
    } else {
      // You might want to customize this message or extract more specific info from the response
      return { error: `Request failed with status code: ${response.status}` };
    }
  } catch (error: any) {
    // Assuming error is of type any. You might want to add more specific type handling
    return { error: error?.message || "An unknown error occurred" };
  }
}