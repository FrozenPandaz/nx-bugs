import React from 'react';
import { render } from '@testing-library/react';

import Lib758 from './lib758';

describe(' Lib758', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib758 />);
    expect(baseElement).toBeTruthy();
  });
});
