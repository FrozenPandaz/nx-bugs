import React from 'react';
import { render } from '@testing-library/react';

import Lib821 from './lib821';

describe(' Lib821', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib821 />);
    expect(baseElement).toBeTruthy();
  });
});
