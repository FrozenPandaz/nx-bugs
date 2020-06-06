import React from 'react';
import { render } from '@testing-library/react';

import Lib151 from './lib151';

describe(' Lib151', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib151 />);
    expect(baseElement).toBeTruthy();
  });
});
