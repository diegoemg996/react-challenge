import { useState, useEffect } from "react";
import axios from "axios";
import { Question } from "../interfaces/quizz.interface";

export const useQuizData = (): [Question[], () => void] => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const API_URL =
    "https://opentdb.com/api.php?amount=10&category=12&type=boolean";

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setQuestions(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetchData = () => {
    fetchData();
  };

  return [questions, refetchData];
};
