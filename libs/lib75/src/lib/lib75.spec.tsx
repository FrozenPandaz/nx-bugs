import React from 'react';
import { render } from '@testing-library/react';

import Lib75 from './lib75';

describe(' Lib75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib75 />);
    expect(baseElement).toBeTruthy();
  });
});
