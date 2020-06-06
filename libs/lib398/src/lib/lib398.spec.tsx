import React from 'react';
import { render } from '@testing-library/react';

import Lib398 from './lib398';

describe(' Lib398', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib398 />);
    expect(baseElement).toBeTruthy();
  });
});
