import React from 'react';
import { render } from '@testing-library/react';

import Lib834 from './lib834';

describe(' Lib834', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib834 />);
    expect(baseElement).toBeTruthy();
  });
});
