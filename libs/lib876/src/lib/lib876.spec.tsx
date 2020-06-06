import React from 'react';
import { render } from '@testing-library/react';

import Lib876 from './lib876';

describe(' Lib876', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib876 />);
    expect(baseElement).toBeTruthy();
  });
});
