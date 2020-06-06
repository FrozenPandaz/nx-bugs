import React from 'react';
import { render } from '@testing-library/react';

import Lib532 from './lib532';

describe(' Lib532', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib532 />);
    expect(baseElement).toBeTruthy();
  });
});
