import { render } from '@testing-library/react';
import { Layout } from 'ui-kit/layouts/Layout';

describe('ui components > Layout', () => {
  it('renders component unchanged', () => {
    const { container } = render(<Layout>Sample Text</Layout>);
    expect(container).toMatchSnapshot();
  });
});
