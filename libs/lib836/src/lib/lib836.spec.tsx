import React from 'react';
import { render } from '@testing-library/react';

import Lib836 from './lib836';

describe(' Lib836', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib836 />);
    expect(baseElement).toBeTruthy();
  });
});
