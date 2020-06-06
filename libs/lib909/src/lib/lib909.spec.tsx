import React from 'react';
import { render } from '@testing-library/react';

import Lib909 from './lib909';

describe(' Lib909', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib909 />);
    expect(baseElement).toBeTruthy();
  });
});
