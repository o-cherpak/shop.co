import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faSliders} from "@fortawesome/free-solid-svg-icons";
import {CustomComment} from "./CustomComment.tsx";
import type {CustomCommentInterface} from "../../../interfaces/Comments.ts";


type CommentSectionProps = {
  comments: CustomCommentInterface[]
}

export function CommentSection({comments}: Readonly<CommentSectionProps>) {
  return (
    <section className={"py-4 gap-4 flex flex-col items-center justify-center"}>
      <div className={"flex items-center justify-between w-full px-6 lg:px-16"}>
        <h4 className={"flex gap-1 font-bold text-xl"}>
          {"All Reviews"}

          <span>({comments.length})</span>
        </h4>

        <div className={"flex items-center gap-2"}>
          <button className="rotate-90 text-black p-2 px-3 bg-gray-150 rounded-full text-lg">
            <FontAwesomeIcon icon={faSliders}/>
          </button>

          <div className={"hidden lg:flex gap-2 bg-gray-200 py-2 px-4 rounded-3xl"}>
            <button>
              Lastest
            </button>

            <button className={""}>
              <FontAwesomeIcon icon={faAngleDown}/>
            </button>
          </div>

          <button className={"bg-black text-white py-2 px-4 rounded-3xl"}>
            Write a Review
          </button>
        </div>
      </div>

      <div className={"grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 lg:px-14"}>
        {comments.map((comment, index) => (
          <CustomComment comment={comment} key={index}/>
        ))}
      </div>

      <button className={"lg:flex mt-4 border-[1px] font-medium border-gray-300 py-3 px-8 rounded-full"}>
        Load More Reviews
      </button>
    </section>
  );
}