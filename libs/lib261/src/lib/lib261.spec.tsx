import React from 'react';
import { render } from '@testing-library/react';

import Lib261 from './lib261';

describe(' Lib261', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib261 />);
    expect(baseElement).toBeTruthy();
  });
});
