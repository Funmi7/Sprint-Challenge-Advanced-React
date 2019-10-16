import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import DarkModeSetter from './components/DarkModeSetter';
import PlayersList from './components/PlayersList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});

describe("DarkModeSetter", () => {
  it("DarkModeSetter renders without crashing", () => {
    const div=document.createElement("div");
    ReactDOM.render(<DarkModeSetter />, div);
  });
});

test('contains header', () => {
  const { getByText } = rtl.render(<App />);
  getByText(/Women's world cup/i);
});

test('renders player data', async () => {
  const { findByText } = rtl.render(<App />);
  findByText(/Alex Morgan/i);
});







