import React from 'react';
import { render } from '@testing-library/react';

import Lib402 from './lib402';

describe(' Lib402', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib402 />);
    expect(baseElement).toBeTruthy();
  });
});
