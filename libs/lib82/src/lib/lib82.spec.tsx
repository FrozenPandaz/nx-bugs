import React from 'react';
import { render } from '@testing-library/react';

import Lib82 from './lib82';

describe(' Lib82', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib82 />);
    expect(baseElement).toBeTruthy();
  });
});
