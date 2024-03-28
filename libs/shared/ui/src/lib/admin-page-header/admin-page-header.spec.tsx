import { render } from '@testing-library/react';

import AdminPageHeader from './admin-page-header';

describe('AdminPageHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminPageHeader />);
    expect(baseElement).toBeTruthy();
  });
});
