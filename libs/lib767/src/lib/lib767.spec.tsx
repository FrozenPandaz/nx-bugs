import React from 'react';
import { render } from '@testing-library/react';

import Lib767 from './lib767';

describe(' Lib767', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib767 />);
    expect(baseElement).toBeTruthy();
  });
});
