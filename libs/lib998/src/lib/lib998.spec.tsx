import React from 'react';
import { render } from '@testing-library/react';

import Lib998 from './lib998';

describe(' Lib998', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib998 />);
    expect(baseElement).toBeTruthy();
  });
});
