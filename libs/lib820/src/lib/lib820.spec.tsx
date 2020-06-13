import React from 'react';
import { render } from '@testing-library/react';

import Lib820 from './lib820';

describe(' Lib820', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib820 />);
    expect(baseElement).toBeTruthy();
  });
});
