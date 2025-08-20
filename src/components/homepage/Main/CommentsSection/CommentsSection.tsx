import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import type { CustomCommentInterface } from "../../../../interfaces/Comments";
import { CommentsSlider } from "./CommentsSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {hoverTextColor} from "../../../../constants/colors.ts";

type CommentsSectionProps = {
  comments: CustomCommentInterface[];
};

export function CommentsSection({ comments }: Readonly<CommentsSectionProps>) {
  const [startIndex, setStartIndex] = useState(0);

  const total = comments.length;

  const getVisibleComments = () => {
    if (total === 0) return [];

    const result = [];

    for (let i = 0; i < 5; i++) {
      result.push(comments[(startIndex + i) % total]);
    }
    return result;
  };

  const scrollRight = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const scrollLeft = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <section>
      <div className="flex items-end md:items-center justify-between pb-6 px-6 md:px-10">
        <h2
          style={{ fontFamily: "Integral CF", fontWeight: "bold" }}
          className="text-4xl text-left md:text-center grow"
        >
          OUR HAPPY CUSTOMERS
        </h2>

        <button
          onClick={scrollLeft}
          className={`text-2xl md:text-3xl pr-4 cursor-pointer 
          hover:scale-105 ${hoverTextColor} transition-all duration-500 active:scale-50`}>

          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <button
          onClick={scrollRight}
          className={`text-2xl md:text-3xl cursor-pointer 
          hover:scale-105 ${hoverTextColor} transition-all duration-500 active:scale-50`}>

          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      <CommentsSlider
        comments={getVisibleComments()}
        centerIndex={2}
      />
    </section>
  );
}
