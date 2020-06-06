import React from 'react';
import { render } from '@testing-library/react';

import Lib791 from './lib791';

describe(' Lib791', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib791 />);
    expect(baseElement).toBeTruthy();
  });
});
