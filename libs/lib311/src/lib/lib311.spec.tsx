import React from 'react';
import { render } from '@testing-library/react';

import Lib311 from './lib311';

describe(' Lib311', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib311 />);
    expect(baseElement).toBeTruthy();
  });
});
