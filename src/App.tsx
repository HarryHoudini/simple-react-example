import React, { useEffect, useState } from 'react';

import Main from './components/Main/Main';
import { UserData } from './components/Users/Users.type';

import './App.css';

function App() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((e) => {
        console.warn('Непредвиденная ошибка при получении пользователей /n', e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Main isLoading={isLoading} items={users} />
      {/* <Success /> */}
    </div>
  );
}

export default App;
