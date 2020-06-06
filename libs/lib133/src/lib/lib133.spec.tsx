import React from 'react';
import { render } from '@testing-library/react';

import Lib133 from './lib133';

describe(' Lib133', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib133 />);
    expect(baseElement).toBeTruthy();
  });
});
