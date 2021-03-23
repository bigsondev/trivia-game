type TResponseCode = 0 | 1 | 2 | 3 | 4;
type TAnswer = 'True' | 'False';
type TAnswerType = 'boolean';
type TAnswerDifficulty = 'easy' | 'medium' | 'hard';

type TQuizResult = {
  category: string;
  correct_answer: TAnswer;
  difficulty: TAnswerDifficulty;
  incorrect_answers: TAnswer[];
  question: string;
  type: TAnswerType;
};

export interface IQuizData {
  response_code: TResponseCode;
  results: TQuizResult[];
}

export const fetchQuizData = async (): Promise<IQuizData> => {
  const response = await fetch(
    'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
  );
  const data = await response.json();

  return data;
};
