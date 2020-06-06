import React from 'react';
import { render } from '@testing-library/react';

import Lib789 from './lib789';

describe(' Lib789', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib789 />);
    expect(baseElement).toBeTruthy();
  });
});
