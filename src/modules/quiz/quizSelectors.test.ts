import {
  changeStage,
  getCurrentQuestion,
  calculateProgress,
  calculateScore,
} from './quizSelectors';

describe('quizSelectors utils', () => {
  it('change state function should work properly', () => {
    expect(changeStage([true, false])).toEqual('playing');
    expect(
      changeStage([
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
      ]),
    ).toEqual('finished');
  });
  it('getCurrentQuestion function should work properly', () => {
    const questions = [
      { question: 'aaa', answer: true, category: 'aaa' },
      { question: 'bbb', answer: true, category: 'bbb' },
      { question: 'ccc', answer: true, category: 'ccc' },
    ];

    expect(getCurrentQuestion(questions, [])).toEqual(questions[0]);
    expect(getCurrentQuestion(questions, [true])).toEqual(questions[1]);
    expect(getCurrentQuestion(questions, [true, false])).toEqual(questions[2]);
  });
  it('calculateProgress function should work properly', () => {
    expect(calculateProgress([])).toEqual(10);
    expect(calculateProgress([true, false, true])).toEqual(40);
    expect(
      calculateProgress([
        true,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
      ]),
    ).toEqual(100);
  });
  it('calculateScoe function should work properly', () => {
    const questions = [
      { question: 'aaa', answer: true, category: 'aaa' },
      { question: 'bbb', answer: true, category: 'bbb' },
      { question: 'ccc', answer: true, category: 'ccc' },
    ];

    expect(calculateScore(questions, [false, false, false])).toEqual(0);
    expect(calculateScore(questions, [true, false, true])).toEqual(2);
    expect(calculateScore(questions, [true, true, true])).toEqual(3);
  });
});
