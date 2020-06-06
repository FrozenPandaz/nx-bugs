import React from 'react';
import { render } from '@testing-library/react';

import Lib665 from './lib665';

describe(' Lib665', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib665 />);
    expect(baseElement).toBeTruthy();
  });
});
