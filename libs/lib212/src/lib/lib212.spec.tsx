import React from 'react';
import { render } from '@testing-library/react';

import Lib212 from './lib212';

describe(' Lib212', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib212 />);
    expect(baseElement).toBeTruthy();
  });
});
