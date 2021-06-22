import React from 'react';

import { Header } from 'components/Header';
import { CharacterList } from 'components/CharacterList';

export const Home = () => {
  return (
    <>
      <div>
        <Header />
        <CharacterList />
      </div>
    </>
  );
};
