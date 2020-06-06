import React from 'react';
import { render } from '@testing-library/react';

import Lib979 from './lib979';

describe(' Lib979', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib979 />);
    expect(baseElement).toBeTruthy();
  });
});
