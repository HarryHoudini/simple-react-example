import React, { useCallback, useState } from 'react';

import Search from '../Search/Search';
import Send from '../Send/Send';
import { Skeleton } from '../Success/Skeleton';
import Users from '../Users/Users';
import { UserData } from '../Users/Users.type';

interface MainProps {
  isLoading: boolean;
  items: UserData[];
}

function Main({ isLoading, items: originalItems }: MainProps) {
  const [searchValue, setSearchValue] = useState('');

  const items = [...originalItems].filter((user) => {
    const first = user.first_name.toLocaleLowerCase();
    const last = user.last_name.toLocaleLowerCase();
    const loweredTarget = searchValue.toLocaleLowerCase();
    return (
      `${last} ${first}`.includes(loweredTarget) ||
      user.email.includes(searchValue)
    );
  });

  const onChangeSearchValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.currentTarget.value);
    },
    [],
  );

  return (
    <>
      <Search onChangeSearchValue={onChangeSearchValue} />
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <Users items={items} />
      )}
      <Send />
    </>
  );
}

export default Main;
