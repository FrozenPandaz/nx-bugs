import React from 'react';
import { render } from '@testing-library/react';

import Lib222 from './lib222';

describe(' Lib222', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib222 />);
    expect(baseElement).toBeTruthy();
  });
});
