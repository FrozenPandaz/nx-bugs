import React from 'react';
import { render } from '@testing-library/react';

import Lib306 from './lib306';

describe(' Lib306', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib306 />);
    expect(baseElement).toBeTruthy();
  });
});
