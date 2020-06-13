import React from 'react';
import { render } from '@testing-library/react';

import Lib969 from './lib969';

describe(' Lib969', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib969 />);
    expect(baseElement).toBeTruthy();
  });
});
