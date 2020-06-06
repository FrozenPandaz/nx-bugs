import React from 'react';
import { render } from '@testing-library/react';

import Lib187 from './lib187';

describe(' Lib187', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib187 />);
    expect(baseElement).toBeTruthy();
  });
});
