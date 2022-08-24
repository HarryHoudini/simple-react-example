import React, { useState } from 'react';

import User from './User';
import { UserData } from './Users.type';

interface UsersProps {
  items: UserData[];
}

function Users({ items }: UsersProps) {
  const [invites, setInvites] = useState<number[]>([]);

  const onClickInvite = (id: number) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  return (
    <ul className="users-list">
      {items.map((user) => (
        <User
          key={user.id}
          invites={invites}
          item={user}
          onClickInvite={onClickInvite}
        />
      ))}
    </ul>
  );
}

export default Users;
