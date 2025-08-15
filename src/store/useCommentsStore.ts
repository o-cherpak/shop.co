import {create} from 'zustand'
import {child, get, ref} from "firebase/database";
import {database} from "../../firebase-config.ts";
import type {CustomCommentInterface} from "../interfaces/Comments.ts";

interface CommentsState {
  comments: CustomCommentInterface[] | null;
  loadingComments: boolean;
  error: string | null;
  fetchComments: () => Promise<void>;
}

export const useCommentsStore = create<CommentsState>((set) => ({
  comments: [] as CustomCommentInterface[],
  loadingComments: false,
  error: null,

  fetchComments: async () => {
    set({loadingComments: true, error: null});

    try {
      const dbRef = ref(database);
      const snapshot = await get(child(dbRef, "comments"));

      if (snapshot.exists()) {
        const dataObj = snapshot.val();
        const commentsArray = Object.values(dataObj);

        set({comments: commentsArray as CustomCommentInterface[], loadingComments: false});
      } else {
        set({comments: [], loadingComments: false});
      }
    } catch (err) {
      set({error: (err as Error).message, loadingComments: false});
    }
  }
}))
