import React from 'react';
import { render } from '@testing-library/react';

import Lib331 from './lib331';

describe(' Lib331', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib331 />);
    expect(baseElement).toBeTruthy();
  });
});
