import {BrowserRouter} from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';
import Routes from './Routes';
import Homepage from './Homepage';

test('renders without crashing', () => {
  render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ));
});

test('/colors', () => {
  render((
    <BrowserRouter initialEntries={['/colors']}>
      <Routes />
    </BrowserRouter>
  ));
});

test('/colors Homepage', () => {
  const {getByText} = render((
    <BrowserRouter initialEntries={['/colors']}>
      <Homepage />
    </BrowserRouter>
  ));

  expect(getByText("Welcome to the color factory")).toBeInTheDocument();
});
