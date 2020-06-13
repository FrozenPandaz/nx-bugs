import React from 'react';
import { render } from '@testing-library/react';

import Lib430 from './lib430';

describe(' Lib430', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib430 />);
    expect(baseElement).toBeTruthy();
  });
});
