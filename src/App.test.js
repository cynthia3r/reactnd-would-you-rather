import { render, screen } from '@testing-library/react';
import App from './components/App';
import reducer from './reducers'
import middleware from './middleware'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(reducer, middleware)

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Would You Rather/i);
  expect(linkElement).toBeInTheDocument();
});
