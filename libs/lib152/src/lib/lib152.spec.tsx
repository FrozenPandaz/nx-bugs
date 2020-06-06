import React from 'react';
import { render } from '@testing-library/react';

import Lib152 from './lib152';

describe(' Lib152', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib152 />);
    expect(baseElement).toBeTruthy();
  });
});
