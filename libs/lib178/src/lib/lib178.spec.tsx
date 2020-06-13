import React from 'react';
import { render } from '@testing-library/react';

import Lib178 from './lib178';

describe(' Lib178', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib178 />);
    expect(baseElement).toBeTruthy();
  });
});
