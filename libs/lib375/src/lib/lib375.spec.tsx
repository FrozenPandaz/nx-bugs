import React from 'react';
import { render } from '@testing-library/react';

import Lib375 from './lib375';

describe(' Lib375', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib375 />);
    expect(baseElement).toBeTruthy();
  });
});
