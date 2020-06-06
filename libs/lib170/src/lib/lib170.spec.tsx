import React from 'react';
import { render } from '@testing-library/react';

import Lib170 from './lib170';

describe(' Lib170', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib170 />);
    expect(baseElement).toBeTruthy();
  });
});
