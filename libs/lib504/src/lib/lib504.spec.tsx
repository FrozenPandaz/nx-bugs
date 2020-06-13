import React from 'react';
import { render } from '@testing-library/react';

import Lib504 from './lib504';

describe(' Lib504', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib504 />);
    expect(baseElement).toBeTruthy();
  });
});
