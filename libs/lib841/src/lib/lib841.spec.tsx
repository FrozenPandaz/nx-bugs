import React from 'react';
import { render } from '@testing-library/react';

import Lib841 from './lib841';

describe(' Lib841', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib841 />);
    expect(baseElement).toBeTruthy();
  });
});
