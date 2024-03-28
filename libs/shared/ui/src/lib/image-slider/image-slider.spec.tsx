import { render } from '@testing-library/react';

import ImageSlider from './image-slider';

describe('ImageSlider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImageSlider slides={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
