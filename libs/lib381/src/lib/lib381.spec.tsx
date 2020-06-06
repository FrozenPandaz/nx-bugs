import React from 'react';
import { render } from '@testing-library/react';

import Lib381 from './lib381';

describe(' Lib381', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib381 />);
    expect(baseElement).toBeTruthy();
  });
});
