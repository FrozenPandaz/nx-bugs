import React from 'react';
import { render } from '@testing-library/react';

import Lib329 from './lib329';

describe(' Lib329', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib329 />);
    expect(baseElement).toBeTruthy();
  });
});
