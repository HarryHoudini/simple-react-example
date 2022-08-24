import React from 'react';

import { ReactComponent as Et } from './dog.svg';
import { ReactComponent as Minus } from './minus.svg';
import { ReactComponent as Plus } from './plus.svg';
import { UserData } from './Users.type';

import './User.scss';

interface Props {
  invites: number[];
  item: UserData;
  onClickInvite?: (id: number) => void;
}

function User({ invites, item: user, onClickInvite }: Props) {
  return (
    <li>
      <div>
        <img
          alt="User"
          className="avatar"
          src="https://reqres.in/img/faces/1-image.jpg"
        />
        <div>
          <h3>{`${user.last_name} ${user.first_name}`}</h3>
          <p>
            <Et height={12} width={12} />
            {user.email}
          </p>
        </div>
      </div>
      {invites.includes(user.id) ? (
        <Minus
          className="action"
          height={12}
          onClick={() => onClickInvite?.(user.id)}
          width={12}
        />
      ) : (
        <Plus
          className="action"
          height={12}
          onClick={() => onClickInvite?.(user.id)}
          width={12}
        />
      )}
    </li>
  );
}

export default User;
