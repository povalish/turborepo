import { render } from '@testing-library/react';
import { Component } from './Component';

describe('test component', () => {
  it('renders component unchanged', () => {
    const { container } = render(<Component />);
    expect(container).toMatchSnapshot();
  });
});
