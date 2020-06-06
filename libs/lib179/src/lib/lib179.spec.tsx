import React from 'react';
import { render } from '@testing-library/react';

import Lib179 from './lib179';

describe(' Lib179', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib179 />);
    expect(baseElement).toBeTruthy();
  });
});
