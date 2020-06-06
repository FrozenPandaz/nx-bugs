import React from 'react';
import { render } from '@testing-library/react';

import Lib361 from './lib361';

describe(' Lib361', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib361 />);
    expect(baseElement).toBeTruthy();
  });
});
