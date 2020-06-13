import React from 'react';
import { render } from '@testing-library/react';

import Lib709 from './lib709';

describe(' Lib709', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib709 />);
    expect(baseElement).toBeTruthy();
  });
});
