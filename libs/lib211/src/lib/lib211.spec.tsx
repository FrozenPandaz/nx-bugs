import React from 'react';
import { render } from '@testing-library/react';

import Lib211 from './lib211';

describe(' Lib211', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib211 />);
    expect(baseElement).toBeTruthy();
  });
});
