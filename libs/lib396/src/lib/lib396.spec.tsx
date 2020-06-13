import React from 'react';
import { render } from '@testing-library/react';

import Lib396 from './lib396';

describe(' Lib396', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib396 />);
    expect(baseElement).toBeTruthy();
  });
});
