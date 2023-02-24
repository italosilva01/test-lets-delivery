import React from 'react';
import { render, screen } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { CharacterListItem } from '.';
import { Character } from 'model/character';

test('show info of personages', () => {
  const infosTemp: Character = {
    id: 1,
    name: 'teste',
    status: 'alive',
    species: 'alien',
    type: 'fyre',
    gender: 'male',
    image: '',
  };
  render(<CharacterListItem character={infosTemp} />);

  expect(screen.getByText('teste')).toBeInTheDocument();
});
