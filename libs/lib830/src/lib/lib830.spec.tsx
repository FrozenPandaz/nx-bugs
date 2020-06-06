import React from 'react';
import { render } from '@testing-library/react';

import Lib830 from './lib830';

describe(' Lib830', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib830 />);
    expect(baseElement).toBeTruthy();
  });
});
