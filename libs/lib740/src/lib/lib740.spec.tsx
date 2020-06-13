import React from 'react';
import { render } from '@testing-library/react';

import Lib740 from './lib740';

describe(' Lib740', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib740 />);
    expect(baseElement).toBeTruthy();
  });
});
