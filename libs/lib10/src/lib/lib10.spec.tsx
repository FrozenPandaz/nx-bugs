import React from 'react';
import { render } from '@testing-library/react';

import Lib10 from './lib10';

describe(' Lib10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib10 />);
    expect(baseElement).toBeTruthy();
  });
});
