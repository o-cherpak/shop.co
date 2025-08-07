import {child, get, ref} from "firebase/database";
import {database} from "../../firebase-config";

export async function getComments() {
  try {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, "comments"));

    if (snapshot.exists()) {

      return snapshot.val();
    } else {
      return null;
    }
  } catch (error) {
    console.error("error", error);
  }
}
