import React from 'react';
import { render } from '@testing-library/react';

import Lib190 from './lib190';

describe(' Lib190', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib190 />);
    expect(baseElement).toBeTruthy();
  });
});
