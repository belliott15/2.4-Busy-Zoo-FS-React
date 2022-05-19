import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
// import Parade from './Components/Parade/Parade';


test('on button click renders the creature identified on the button', () => {
  render(<App />);
  
  const openButton = screen.queryByText(/Open up/i);
  fireEvent.click(openButton);

  const emojiElement = screen.queryAllByText(/🧜‍♀️/i);
  expect(emojiElement.length).toBe(1);

  const mermaidButton = screen.queryByText(/Mermaid/i);
  expect(mermaidButton).toBeInTheDocument();
  fireEvent.click(mermaidButton);

  const emojiElementAfter = screen.queryAllByText(/🧜‍♀️/i);
  expect(emojiElementAfter.length).toBe(2);

  const dragonButton = screen.queryByText(/Dragon/i);
  fireEvent.click(dragonButton);

  const emojiDragon = screen.queryByText(/🐉/i);
  expect(emojiDragon).toBeInTheDocument();
});

test('on button click opens the zoo and then closes it', () => {
  render(<App />);
  const openButton = screen.queryByText(/Open up/i);
  const closedText = screen.queryByText(/Sorry We Are Closed/i);
  expect(closedText).toBeInTheDocument();
  fireEvent.click(openButton);

  const openText = screen.queryByText(/Come in!/i);
  expect(openText).toBeInTheDocument();

  const closeButton = screen.queryByText(/Close it down/i);
  fireEvent.click(closeButton);

  expect(closedText).toBeInTheDocument();
  
});
