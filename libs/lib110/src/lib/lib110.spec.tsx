import React from 'react';
import { render } from '@testing-library/react';

import Lib110 from './lib110';

describe(' Lib110', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib110 />);
    expect(baseElement).toBeTruthy();
  });
});
