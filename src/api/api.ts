export const fetchQuizData = async () => {
  const response = await fetch(
    'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
  );
  const data = await response.json();

  return data;
};
