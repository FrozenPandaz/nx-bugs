import React from 'react';
import { render } from '@testing-library/react';

import Lib175 from './lib175';

describe(' Lib175', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib175 />);
    expect(baseElement).toBeTruthy();
  });
});
