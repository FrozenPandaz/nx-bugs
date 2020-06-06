import React from 'react';
import { render } from '@testing-library/react';

import Lib968 from './lib968';

describe(' Lib968', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib968 />);
    expect(baseElement).toBeTruthy();
  });
});
