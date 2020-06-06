import React from 'react';
import { render } from '@testing-library/react';

import Lib193 from './lib193';

describe(' Lib193', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib193 />);
    expect(baseElement).toBeTruthy();
  });
});
