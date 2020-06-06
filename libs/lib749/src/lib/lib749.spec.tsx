import React from 'react';
import { render } from '@testing-library/react';

import Lib749 from './lib749';

describe(' Lib749', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib749 />);
    expect(baseElement).toBeTruthy();
  });
});
