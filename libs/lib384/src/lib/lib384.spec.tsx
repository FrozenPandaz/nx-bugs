import React from 'react';
import { render } from '@testing-library/react';

import Lib384 from './lib384';

describe(' Lib384', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib384 />);
    expect(baseElement).toBeTruthy();
  });
});
