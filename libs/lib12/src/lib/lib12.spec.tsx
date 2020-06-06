import React from 'react';
import { render } from '@testing-library/react';

import Lib12 from './lib12';

describe(' Lib12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib12 />);
    expect(baseElement).toBeTruthy();
  });
});
