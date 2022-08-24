import React from 'react';

interface Props {
  count: number;
}

function Success({ count }: Props) {
  return (
    <div className="success-block">
      <img alt="Success" src="/assets/success.svg" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button className="send-invite-btn" type="button">
        Назад
      </button>
    </div>
  );
}

export default Success;
