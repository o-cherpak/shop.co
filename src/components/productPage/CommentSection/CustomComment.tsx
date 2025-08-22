import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import type {CustomCommentInterface} from "../../../interfaces/Comments.ts";

type CustomCommentProps = {
  comment: CustomCommentInterface;
}

export function CustomComment({comment}: Readonly<CustomCommentProps>) {
  function formatDate(): string {
    const date = new Date;

    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  return (
    <div className={"flex flex-col p-4 lg:px-8 border-[2px] shadow-sm border-gray-200 rounded-2xl gap-2 lg:gap-3"}>
      <h4 className={"font-semibold flex gap-1"}>
        {comment.author}
        <span><FontAwesomeIcon icon={faCircleCheck} color="green"/></span>
      </h4>

      <p>{comment.text}</p>

      <p className={"text-black/60"}>Posted on {formatDate()}</p>
    </div>
  )
}