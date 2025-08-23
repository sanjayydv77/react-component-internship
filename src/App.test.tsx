import { render, screen } from '@testing-library/react';
import App from './App';

// Basic test - App renders without crashing
test('renders React Component Library demo', () => {
  render(<App />);
  const heading = screen.getByText(/React Component Library/i);
  expect(heading).toBeInTheDocument();
});

// Test InputField component exists
test('renders InputField components', () => {
  render(<App />);
  const inputs = screen.getAllByRole('textbox');
  expect(inputs.length).toBeGreaterThan(0);
});

// Test DataTable component exists  
test('renders DataTable component', () => {
  render(<App />);
  const table = screen.getByRole('table');
  expect(table).toBeInTheDocument();
});

// Test basic interactivity
test('components are interactive', () => {
  render(<App />);
  const checkboxes = screen.getAllByRole('checkbox');
  const buttons = screen.getAllByRole('button');
  expect(checkboxes.length).toBeGreaterThan(0);
  expect(buttons.length).toBeGreaterThan(0);
});