import React from 'react';
import { render } from '@testing-library/react';

import Lib754 from './lib754';

describe(' Lib754', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib754 />);
    expect(baseElement).toBeTruthy();
  });
});
