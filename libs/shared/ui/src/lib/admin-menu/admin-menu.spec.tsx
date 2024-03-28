import { render } from '@testing-library/react';

import AdminMenu from './admin-menu';

describe('AdminMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminMenu />);
    expect(baseElement).toBeTruthy();
  });
});
