import React from 'react';

import { questions } from '../../App';

interface Props {
  onClickVariant: (idx: number) => void;
  question: { correct: number; title: string; variants: string[] };
  step: number;
}

const Game = ({
  onClickVariant,
  question: { title, variants },
  step,
}: Props) => {
  const result = (step / questions.length) * 100;

  return (
    <>
      <div className="progress">
        <div className="progress__inner" style={{ width: `${result}%` }} />
      </div>
      <h1>{title}</h1>
      <ul>
        {variants.map((variant, idx) => (
          <li
            key={variant}
            onClick={(_) => {
              onClickVariant(idx);
            }}
            onKeyDown={() => onClickVariant}
            role="menuitem"
          >
            {variant}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Game;
