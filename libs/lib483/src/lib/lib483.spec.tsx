import React from 'react';
import { render } from '@testing-library/react';

import Lib483 from './lib483';

describe(' Lib483', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib483 />);
    expect(baseElement).toBeTruthy();
  });
});
