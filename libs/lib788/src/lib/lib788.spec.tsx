import React from 'react';
import { render } from '@testing-library/react';

import Lib788 from './lib788';

describe(' Lib788', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib788 />);
    expect(baseElement).toBeTruthy();
  });
});
