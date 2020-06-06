import React from 'react';
import { render } from '@testing-library/react';

import Lib264 from './lib264';

describe(' Lib264', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib264 />);
    expect(baseElement).toBeTruthy();
  });
});
