import React from 'react';
import { render } from '@testing-library/react';

import Lib389 from './lib389';

describe(' Lib389', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib389 />);
    expect(baseElement).toBeTruthy();
  });
});
