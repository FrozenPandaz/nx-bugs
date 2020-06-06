import React from 'react';
import { render } from '@testing-library/react';

import Lib493 from './lib493';

describe(' Lib493', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib493 />);
    expect(baseElement).toBeTruthy();
  });
});
