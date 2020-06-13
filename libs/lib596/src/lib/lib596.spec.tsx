import React from 'react';
import { render } from '@testing-library/react';

import Lib596 from './lib596';

describe(' Lib596', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib596 />);
    expect(baseElement).toBeTruthy();
  });
});
