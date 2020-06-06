import React from 'react';
import { render } from '@testing-library/react';

import Lib489 from './lib489';

describe(' Lib489', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib489 />);
    expect(baseElement).toBeTruthy();
  });
});
