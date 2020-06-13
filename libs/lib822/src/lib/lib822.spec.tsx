import React from 'react';
import { render } from '@testing-library/react';

import Lib822 from './lib822';

describe(' Lib822', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib822 />);
    expect(baseElement).toBeTruthy();
  });
});
