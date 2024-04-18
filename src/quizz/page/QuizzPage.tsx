import { useState, useEffect } from "react";
import { useQuizData } from "../hooks/useQuizData";
import { QuizResult } from "../components/QuizResult";
import { QuizBox } from "../components/QuizBox";

export const QuizzPage = () => {
  const [questions, refetchData] = useQuizData();
  const [score, setScore] = useState<number>(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  useEffect(() => {
    refetchData();
  }, []);

  const handleAnswer = (userAnswer: string, correctAnswer: string) => {
    if (userAnswer === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    if (currentQuestionIndex === questions.length - 1) {
      setQuizFinished(true);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    refetchData();
    setQuizFinished(false);
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="m-t-3">
      <h1>Quiz App</h1>
      <div className="quiz__container p-3 m-t-3">
        <div className="quiz__content">
          {!quizFinished && (
            <QuizBox question={currentQuestion} onAnswer={handleAnswer} />
          )}
          {quizFinished && (
            <QuizResult
              score={score}
              totalQuestions={questions.length}
              resetQuiz={resetQuiz}
            />
          )}
        </div>
      </div>
    </div>
  );
};
