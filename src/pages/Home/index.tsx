import React from 'react';

import { Header } from 'components/Header';
import { CharacterList } from 'components/CharacterList';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from 'store';
// import { insert } from 'store/Stock.store';
// import { Character } from 'model/character';
export const Home = () => {
  // const stock = useSelector((state: RootState) => state.stock);
  // const dispatch = useDispatch();
  return (
    <>
      <Header />

      <CharacterList />
      {/*  {stock.[0]} */}
      {/* <button onClick={() => dispatch(insert({} as Character))}>
        increment
      </button> */}
    </>
  );
};
