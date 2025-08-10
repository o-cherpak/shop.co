import {child, get, ref} from "firebase/database";
import {database} from "../../firebase-config";

export async function getAllProducts() {
  try {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, "products"));

    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  } catch (error) {
    console.error("error", error);
  }
}
