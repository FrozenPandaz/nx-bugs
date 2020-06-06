import React from 'react';
import { render } from '@testing-library/react';

import Lib156 from './lib156';

describe(' Lib156', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib156 />);
    expect(baseElement).toBeTruthy();
  });
});
