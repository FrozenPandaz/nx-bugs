import React from 'react';
import { render } from '@testing-library/react';

import Lib183 from './lib183';

describe(' Lib183', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib183 />);
    expect(baseElement).toBeTruthy();
  });
});
