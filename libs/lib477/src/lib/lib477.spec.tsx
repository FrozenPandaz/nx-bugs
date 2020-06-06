import React from 'react';
import { render } from '@testing-library/react';

import Lib477 from './lib477';

describe(' Lib477', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib477 />);
    expect(baseElement).toBeTruthy();
  });
});
