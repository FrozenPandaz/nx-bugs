import React from 'react';
import { render } from '@testing-library/react';

import Lib77 from './lib77';

describe(' Lib77', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib77 />);
    expect(baseElement).toBeTruthy();
  });
});
