import type { CustomComment } from "../../../../interfaces/Comments";
import { CommentsSlider } from "./CommentsSlider";

type CommentsSectionProps = {
  comments: CustomComment[];
};

export function CommentsSection({ comments }: Readonly<CommentsSectionProps>) {
  return (
    <section className="px-10">
      <h2
        style={{ fontFamily: "Integral CF", fontWeight: "bold" }}
        className="text-4xl text-center pb-6"
      >
        OUR HAPPY CUSTOMERS
      </h2>

      <CommentsSlider comments={comments} />
    </section>
  );
}
