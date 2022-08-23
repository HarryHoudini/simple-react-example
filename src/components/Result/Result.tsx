import React from 'react';

interface Props {
  handlerReset: () => void;
  questionsLength: number;
  result: number;
}

export function Result({ handlerReset, questionsLength, result }: Props) {
  return (
    <div className="result">
      <img
        alt="Result screen img"
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
      />
      <h2>
        Вы отгадали {result} ответа из {questionsLength}
      </h2>
      <button onClick={handlerReset} type="button">
        Попробовать снова
      </button>
    </div>
  );
}
