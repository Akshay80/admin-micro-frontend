import { render } from '@testing-library/react';

import Star from './star';

describe('Star', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Star />);
    expect(baseElement).toBeTruthy();
  });
});
