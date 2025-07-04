import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { CustomComment } from "../../../../interfaces/Comments";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

type CommentCardProps = {
  comment: CustomComment;
};

export function CommentCard({ comment }: Readonly<CommentCardProps>) {
  const { author, text } = comment;

  return (
    <div className="rounded-2xl border border-gray-400 p-4 shadow-lg w-[300px] shrink-0 ">
      <h3 className="font-semibold text-xl mb-2 ">
        {author} <FontAwesomeIcon icon={faCircleCheck} color="green" />
      </h3>

      <p className="text-black/80">{text}</p>
    </div>
  );
}
