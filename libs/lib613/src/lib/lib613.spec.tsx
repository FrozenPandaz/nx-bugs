import React from 'react';
import { render } from '@testing-library/react';

import Lib613 from './lib613';

describe(' Lib613', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib613 />);
    expect(baseElement).toBeTruthy();
  });
});
