import React from 'react';
import { render } from '@testing-library/react';

import Lib271 from './lib271';

describe(' Lib271', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib271 />);
    expect(baseElement).toBeTruthy();
  });
});
