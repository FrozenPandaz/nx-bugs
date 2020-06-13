import React from 'react';
import { render } from '@testing-library/react';

import Lib523 from './lib523';

describe(' Lib523', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib523 />);
    expect(baseElement).toBeTruthy();
  });
});
