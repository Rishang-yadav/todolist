"use server";
import axios from "axios";
export async function DeleteTodo( id: string): Promise<{ data?: any; error: string | null } | undefined> {
  try {
    const response = await axios.delete(
        `http://localhost:3000//api/todos/${id}`,{
          data: { id },
        });
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

// export const DeleteTodo = async (id: string) => {
//   try {
//     const response = await axios.delete(`http://localhost:3000//api/todos/${id}`, {
//       data: { id },
//     });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };