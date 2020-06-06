import React from 'react';
import { render } from '@testing-library/react';

import Lib314 from './lib314';

describe(' Lib314', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib314 />);
    expect(baseElement).toBeTruthy();
  });
});
