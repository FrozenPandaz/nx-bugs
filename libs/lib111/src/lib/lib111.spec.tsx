import React from 'react';
import { render } from '@testing-library/react';

import Lib111 from './lib111';

describe(' Lib111', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib111 />);
    expect(baseElement).toBeTruthy();
  });
});
