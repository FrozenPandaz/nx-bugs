import React from 'react';
import { render } from '@testing-library/react';

import Lib0 from './lib0';

describe(' Lib0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib0 />);
    expect(baseElement).toBeTruthy();
  });
});
