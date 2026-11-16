import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { List, ListItem } from '../src/list';

test('renders a semantic list with leading content and an accessible action', () => {
  render(<List><ListItem leading={<span>Image</span>} action={<button aria-label="Edit">✎</button>}><a href="/event">Event</a></ListItem></List>);
  expect(screen.getByRole('list')).toContainElement(screen.getByRole('listitem'));
  expect(screen.getByRole('link', {name:'Event'})).toHaveAttribute('href', '/event');
  expect(screen.getByRole('button', {name:'Edit'})).toBeInTheDocument();
});

test('supports semantic description lists', () => {
  const { container } = render(<List as="div"><ListItem as="div"><dl><dt>Venue</dt><dd>Graz</dd></dl></ListItem></List>);
  expect(container.querySelector('dl > dt')).toHaveTextContent('Venue');
  expect(container.querySelector('dl > dd')).toHaveTextContent('Graz');
});
