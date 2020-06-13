import React from 'react';
import { render } from '@testing-library/react';

import Lib126 from './lib126';

describe(' Lib126', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib126 />);
    expect(baseElement).toBeTruthy();
  });
});
