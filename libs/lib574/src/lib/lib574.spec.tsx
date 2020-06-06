import React from 'react';
import { render } from '@testing-library/react';

import Lib574 from './lib574';

describe(' Lib574', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib574 />);
    expect(baseElement).toBeTruthy();
  });
});
