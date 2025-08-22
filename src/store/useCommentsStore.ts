import {create} from 'zustand'
import {child, get, ref} from "firebase/database";
import {database} from "../../firebase-config.ts";
import type {CustomCommentInterface} from "../interfaces/Comments.ts";

interface CommentsState {
  comments: CustomCommentInterface[];
  isLoadingComments: boolean;
  error: string | null;
  fetchComments: () => Promise<void>;
}

export const useCommentsStore = create<CommentsState>((set) => ({
  comments: [] as CustomCommentInterface[],
  isLoadingComments: false,
  error: null,

  fetchComments: async () => {
    set({isLoadingComments: true, error: null});

    try {
      const dbRef = ref(database);
      const snapshot = await get(child(dbRef, "comments"));

      if (snapshot.exists()) {
        const dataObj = snapshot.val();
        const commentsArray = Object.values(dataObj);

        set({comments: commentsArray as CustomCommentInterface[], isLoadingComments: false});
      } else {
        set({comments: [], isLoadingComments: false});
      }
    } catch (err) {
      set({error: (err as Error).message, isLoadingComments: false});
    }
  }
}))
