import React from 'react';
import { render } from '@testing-library/react';

import Lib572 from './lib572';

describe(' Lib572', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib572 />);
    expect(baseElement).toBeTruthy();
  });
});
