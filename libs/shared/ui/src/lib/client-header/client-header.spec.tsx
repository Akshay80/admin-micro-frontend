import { render } from '@testing-library/react';

import ClientHeader from './client-header';

describe('ClientHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientHeader />);
    expect(baseElement).toBeTruthy();
  });
});
