// eslint-disable-next-line import/no-extraneous-dependencies
import { waitFor } from '@testing-library/react';
import singletonRouter from 'next/navigation';

export default async function expectRedirectTo(url: string): Promise<void> {
  await waitFor(() => {
    expect(singletonRouter).toMatchObject({ asPath: url });
  });
}
