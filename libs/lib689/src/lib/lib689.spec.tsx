import React from 'react';
import { render } from '@testing-library/react';

import Lib689 from './lib689';

describe(' Lib689', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib689 />);
    expect(baseElement).toBeTruthy();
  });
});
