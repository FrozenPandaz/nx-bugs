import React from 'react';
import { render } from '@testing-library/react';

import Lib768 from './lib768';

describe(' Lib768', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib768 />);
    expect(baseElement).toBeTruthy();
  });
});
