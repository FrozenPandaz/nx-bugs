import React from 'react';
import { render } from '@testing-library/react';

import Lib191 from './lib191';

describe(' Lib191', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib191 />);
    expect(baseElement).toBeTruthy();
  });
});
