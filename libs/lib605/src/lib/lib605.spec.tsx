import React from 'react';
import { render } from '@testing-library/react';

import Lib605 from './lib605';

describe(' Lib605', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib605 />);
    expect(baseElement).toBeTruthy();
  });
});
