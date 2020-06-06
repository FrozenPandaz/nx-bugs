import React from 'react';
import { render } from '@testing-library/react';

import Lib935 from './lib935';

describe(' Lib935', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib935 />);
    expect(baseElement).toBeTruthy();
  });
});
