import { Question } from "../interfaces/quizz.interface";
import { decode } from "html-entities";

interface Props {
  question: Question;
  onAnswer: (userAnswer: string, correctAnswer: string) => void;
}

export const QuizBox = ({ question, onAnswer }: Props) => {
  const handleAnswer = (answer: string) => {
    onAnswer(answer, question.correct_answer);
  };

  return (
    <div>
      <h3>{decode(question.question)}</h3>
      <div className="quiz__buttons">
        <button
          className="quiz__button p-2 m-r-2 "
          onClick={() => handleAnswer("True")}
        >
          True
        </button>
        <button
          className="quiz__button p-2"
          onClick={() => handleAnswer("False")}
        >
          False
        </button>
      </div>
    </div>
  );
};
