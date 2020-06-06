import React from 'react';
import { render } from '@testing-library/react';

import Lib327 from './lib327';

describe(' Lib327', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib327 />);
    expect(baseElement).toBeTruthy();
  });
});
