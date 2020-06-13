import React from 'react';
import { render } from '@testing-library/react';

import Lib318 from './lib318';

describe(' Lib318', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib318 />);
    expect(baseElement).toBeTruthy();
  });
});
