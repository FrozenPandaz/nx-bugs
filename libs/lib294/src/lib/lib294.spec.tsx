import React from 'react';
import { render } from '@testing-library/react';

import Lib294 from './lib294';

describe(' Lib294', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib294 />);
    expect(baseElement).toBeTruthy();
  });
});
