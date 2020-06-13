import React from 'react';
import { render } from '@testing-library/react';

import Lib138 from './lib138';

describe(' Lib138', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib138 />);
    expect(baseElement).toBeTruthy();
  });
});
