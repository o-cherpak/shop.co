import { ref, get, child } from "firebase/database";
import { database } from "../../firebase-config";

export async function getAllProducts() {
  try {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, "products "));

    if (snapshot.exists()) {
      const data = snapshot.val();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("error", error);
  }
}
