import React from 'react';
import { render } from '@testing-library/react';

import Lib913 from './lib913';

describe(' Lib913', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib913 />);
    expect(baseElement).toBeTruthy();
  });
});
