import React from 'react';
import { render } from '@testing-library/react';

import Lib860 from './lib860';

describe(' Lib860', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib860 />);
    expect(baseElement).toBeTruthy();
  });
});
