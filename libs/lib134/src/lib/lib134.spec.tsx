import React from 'react';
import { render } from '@testing-library/react';

import Lib134 from './lib134';

describe(' Lib134', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib134 />);
    expect(baseElement).toBeTruthy();
  });
});
