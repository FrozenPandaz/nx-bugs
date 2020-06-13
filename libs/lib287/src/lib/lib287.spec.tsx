import React from 'react';
import { render } from '@testing-library/react';

import Lib287 from './lib287';

describe(' Lib287', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib287 />);
    expect(baseElement).toBeTruthy();
  });
});
