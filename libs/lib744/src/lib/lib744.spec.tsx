import React from 'react';
import { render } from '@testing-library/react';

import Lib744 from './lib744';

describe(' Lib744', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib744 />);
    expect(baseElement).toBeTruthy();
  });
});
