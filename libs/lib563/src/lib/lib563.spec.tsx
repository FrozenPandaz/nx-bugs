import React from 'react';
import { render } from '@testing-library/react';

import Lib563 from './lib563';

describe(' Lib563', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib563 />);
    expect(baseElement).toBeTruthy();
  });
});
