import React from 'react';
import { render } from '@testing-library/react';

import Lib726 from './lib726';

describe(' Lib726', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib726 />);
    expect(baseElement).toBeTruthy();
  });
});
