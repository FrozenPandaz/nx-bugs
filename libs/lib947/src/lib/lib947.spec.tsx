import React from 'react';
import { render } from '@testing-library/react';

import Lib947 from './lib947';

describe(' Lib947', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib947 />);
    expect(baseElement).toBeTruthy();
  });
});
