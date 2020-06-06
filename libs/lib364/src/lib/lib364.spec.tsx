import React from 'react';
import { render } from '@testing-library/react';

import Lib364 from './lib364';

describe(' Lib364', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib364 />);
    expect(baseElement).toBeTruthy();
  });
});
