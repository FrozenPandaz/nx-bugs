import React from 'react';
import { render } from '@testing-library/react';

import Lib851 from './lib851';

describe(' Lib851', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib851 />);
    expect(baseElement).toBeTruthy();
  });
});
