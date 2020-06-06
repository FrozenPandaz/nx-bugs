import React from 'react';
import { render } from '@testing-library/react';

import Lib291 from './lib291';

describe(' Lib291', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib291 />);
    expect(baseElement).toBeTruthy();
  });
});
