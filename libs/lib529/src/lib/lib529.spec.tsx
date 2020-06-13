import React from 'react';
import { render } from '@testing-library/react';

import Lib529 from './lib529';

describe(' Lib529', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib529 />);
    expect(baseElement).toBeTruthy();
  });
});
