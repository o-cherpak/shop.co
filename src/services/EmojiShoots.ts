import confetti from "canvas-confetti";

export function EmojiShoots() {
  const scalar = 2;

  const party = confetti.shapeFromText({ text: "🎉", scalar });
  const face = confetti.shapeFromText({ text: "🥳", scalar });
  const spark = confetti.shapeFromText({ text: "🎊", scalar });

  const defaults = {
    spread: 360,
    ticks: 80,
    gravity: 0.8,
    decay: 0.91,
    startVelocity: 30,
    scalar,
  };

  function shoot() {
    confetti({ ...defaults, particleCount: 30, shapes: [party, face, spark] });
    confetti({ ...defaults, particleCount: 10, scalar: scalar * 1.2, shapes: [party] });
    confetti({ ...defaults, particleCount: 10, scalar: scalar / 1.5, shapes: [spark] });
  }

  setTimeout(shoot, 0);
  setTimeout(shoot, 150);
  setTimeout(shoot, 300);
}
