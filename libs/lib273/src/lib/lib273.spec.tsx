import React from 'react';
import { render } from '@testing-library/react';

import Lib273 from './lib273';

describe(' Lib273', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib273 />);
    expect(baseElement).toBeTruthy();
  });
});
