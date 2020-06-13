import React from 'react';
import { render } from '@testing-library/react';

import Lib510 from './lib510';

describe(' Lib510', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib510 />);
    expect(baseElement).toBeTruthy();
  });
});
