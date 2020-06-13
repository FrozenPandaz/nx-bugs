import React from 'react';
import { render } from '@testing-library/react';

import Lib527 from './lib527';

describe(' Lib527', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib527 />);
    expect(baseElement).toBeTruthy();
  });
});
