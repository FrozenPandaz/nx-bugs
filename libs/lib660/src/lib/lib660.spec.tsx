import React from 'react';
import { render } from '@testing-library/react';

import Lib660 from './lib660';

describe(' Lib660', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib660 />);
    expect(baseElement).toBeTruthy();
  });
});
