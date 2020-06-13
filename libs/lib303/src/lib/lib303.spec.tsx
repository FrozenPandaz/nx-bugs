import React from 'react';
import { render } from '@testing-library/react';

import Lib303 from './lib303';

describe(' Lib303', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib303 />);
    expect(baseElement).toBeTruthy();
  });
});
