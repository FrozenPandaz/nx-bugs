import React from 'react';
import { render } from '@testing-library/react';

import Lib304 from './lib304';

describe(' Lib304', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib304 />);
    expect(baseElement).toBeTruthy();
  });
});
