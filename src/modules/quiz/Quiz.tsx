import { useEffect } from 'react';

export const Quiz = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
      );
      const data = await response.json();

      console.log('DATA: ', data);
    };

    fetchData();
  }, []);
  return <div>Hello Quiz</div>;
};
