import React from 'react';
import { render } from '@testing-library/react';

import Lib645 from './lib645';

describe(' Lib645', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib645 />);
    expect(baseElement).toBeTruthy();
  });
});
