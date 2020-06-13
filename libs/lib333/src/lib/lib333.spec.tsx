import React from 'react';
import { render } from '@testing-library/react';

import Lib333 from './lib333';

describe(' Lib333', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib333 />);
    expect(baseElement).toBeTruthy();
  });
});
