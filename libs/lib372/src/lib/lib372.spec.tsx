import React from 'react';
import { render } from '@testing-library/react';

import Lib372 from './lib372';

describe(' Lib372', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib372 />);
    expect(baseElement).toBeTruthy();
  });
});
