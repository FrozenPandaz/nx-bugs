import React from 'react';
import { render } from '@testing-library/react';

import Lib272 from './lib272';

describe(' Lib272', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib272 />);
    expect(baseElement).toBeTruthy();
  });
});
