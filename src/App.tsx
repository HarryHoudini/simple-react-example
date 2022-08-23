import React, { useState } from 'react';

import Game from './components/Game/Game';
import { Result } from './components/Result/Result';

import './App.scss';

export const questions = [
  {
    correct: 0,
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
  },
  {
    correct: 1,
    title: 'Компонент - это ... ',
    variants: [
      'приложение',
      'часть приложения или страницы',
      'то, что я не знаю что такое',
    ],
  },
  {
    correct: 2,
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
  },
];

function App() {
  const [step, setStep] = useState(0);
  const question = questions[step];
  const [result, setResult] = useState(0);

  const onClickVariant = (answerNumber: number) => {
    if (answerNumber === question.correct) {
      setResult(result + 1);
    }
    setStep(step + 1);
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game onClickVariant={onClickVariant} question={question} step={step} />
      ) : (
        <Result
          handlerReset={() => {
            setStep(0);
          }}
          questionsLength={questions.length}
          result={result}
        />
      )}
    </div>
  );
}

export default App;
