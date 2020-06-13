import React from 'react';
import { render } from '@testing-library/react';

import Lib878 from './lib878';

describe(' Lib878', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib878 />);
    expect(baseElement).toBeTruthy();
  });
});
