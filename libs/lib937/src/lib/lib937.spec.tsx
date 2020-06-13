import React from 'react';
import { render } from '@testing-library/react';

import Lib937 from './lib937';

describe(' Lib937', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib937 />);
    expect(baseElement).toBeTruthy();
  });
});
