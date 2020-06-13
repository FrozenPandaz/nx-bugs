import React from 'react';
import { render } from '@testing-library/react';

import Lib704 from './lib704';

describe(' Lib704', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib704 />);
    expect(baseElement).toBeTruthy();
  });
});
