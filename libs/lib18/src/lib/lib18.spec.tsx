import React from 'react';
import { render } from '@testing-library/react';

import Lib18 from './lib18';

describe(' Lib18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib18 />);
    expect(baseElement).toBeTruthy();
  });
});
