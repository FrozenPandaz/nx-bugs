import React from 'react';
import { render } from '@testing-library/react';

import Lib826 from './lib826';

describe(' Lib826', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib826 />);
    expect(baseElement).toBeTruthy();
  });
});
