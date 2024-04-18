import { useEffect } from "react";
import confetti from "canvas-confetti";

interface Props {
  score: number;
  totalQuestions: number;
  resetQuiz: () => void;
}

export const QuizResult = ({ score, totalQuestions, resetQuiz }: Props) => {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div>
      <h3 className="m-b-3">
        Quiz finished! Your score: {score}/{totalQuestions}
      </h3>
      <div className="quiz__buttons">
        <button className="btn btn-primary p-2" onClick={resetQuiz}>
          Restart Quiz
        </button>
      </div>
    </div>
  );
};
