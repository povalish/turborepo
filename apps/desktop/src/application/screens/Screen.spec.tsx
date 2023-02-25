import { render } from '@testing-library/react';
import { Screen } from './Screen';

describe('Screen component', () => {
  it('renders component unchanged', () => {
    const { container } = render(<Screen />);
    expect(container).toMatchSnapshot();
  });
});
