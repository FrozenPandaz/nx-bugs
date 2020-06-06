import React from 'react';
import { render } from '@testing-library/react';

import Lib196 from './lib196';

describe(' Lib196', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib196 />);
    expect(baseElement).toBeTruthy();
  });
});
