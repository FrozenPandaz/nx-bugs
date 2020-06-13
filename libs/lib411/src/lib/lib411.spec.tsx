import React from 'react';
import { render } from '@testing-library/react';

import Lib411 from './lib411';

describe(' Lib411', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib411 />);
    expect(baseElement).toBeTruthy();
  });
});
