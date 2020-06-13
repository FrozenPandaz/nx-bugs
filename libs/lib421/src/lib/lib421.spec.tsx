import React from 'react';
import { render } from '@testing-library/react';

import Lib421 from './lib421';

describe(' Lib421', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib421 />);
    expect(baseElement).toBeTruthy();
  });
});
