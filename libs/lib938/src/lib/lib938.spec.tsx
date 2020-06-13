import React from 'react';
import { render } from '@testing-library/react';

import Lib938 from './lib938';

describe(' Lib938', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib938 />);
    expect(baseElement).toBeTruthy();
  });
});
