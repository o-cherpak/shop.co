import type { CustomComment } from "../../../../interfaces/Comments";
import { CommentCard } from "./CommentCard";

type CommentsSectionProps = {
  comments: CustomComment[];
};

export function CommentsSlider({ comments }: Readonly<CommentsSectionProps>) {
  return (
    <div className="overflow-x-hidden">
      <div className="flex gap-14 justify-center pb-2">
        {comments.map((com) => (
          <CommentCard key={com.itemId} comment={com} />
        ))}
      </div>
    </div>
  );
}
