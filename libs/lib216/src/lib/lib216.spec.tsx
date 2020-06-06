import React from 'react';
import { render } from '@testing-library/react';

import Lib216 from './lib216';

describe(' Lib216', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib216 />);
    expect(baseElement).toBeTruthy();
  });
});
