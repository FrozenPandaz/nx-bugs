import React from 'react';
import { render } from '@testing-library/react';

import Lib470 from './lib470';

describe(' Lib470', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib470 />);
    expect(baseElement).toBeTruthy();
  });
});
