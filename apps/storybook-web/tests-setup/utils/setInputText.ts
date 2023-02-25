// eslint-disable-next-line import/no-extraneous-dependencies
import { fireEvent } from '@testing-library/react';

export function setInputText(element: Element | Document | Node | Window, value: string) {
  return fireEvent.input(element, { target: { value } });
}
