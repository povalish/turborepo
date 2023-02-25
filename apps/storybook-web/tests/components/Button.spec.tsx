import { render } from '@testing-library/react';
import { Button } from 'ui-kit/components/Button';

describe('ui components > Button', () => {
  it('renders component unchanged', () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });
});
