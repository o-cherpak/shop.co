import type { RefObject } from "react";
import type { CustomComment } from "../../../../interfaces/Comments";
import { CommentCard } from "./CommentCard";

type CommentsSectionProps = {
  comments: CustomComment[];
  containerRef: RefObject<HTMLDivElement | null>;
  centerIndex: number;
};

export function CommentsSlider({
  comments,
  containerRef,
  centerIndex,
}: Readonly<CommentsSectionProps>) {
  return (
    <div className="overflow-hidden">
      <div
        ref={containerRef}
        className="flex pb-6 items-center justify-center gap-6 md:gap-16"
      >
        {comments.map((com, i) => {
          const isCenter = i >= centerIndex - 1 && i <= centerIndex + 1;

          return (
            <div
              key={com.itemId}
              className="w-[300px] shrink-0 transition-all duration-300"
              style={{
                filter: isCenter ? "none" : "blur(2px)",
              }}
            >
              <CommentCard comment={com} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
