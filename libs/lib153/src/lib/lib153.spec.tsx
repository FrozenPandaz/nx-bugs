import React from 'react';
import { render } from '@testing-library/react';

import Lib153 from './lib153';

describe(' Lib153', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib153 />);
    expect(baseElement).toBeTruthy();
  });
});
