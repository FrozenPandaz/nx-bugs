import React from 'react';
import { render } from '@testing-library/react';

import Lib322 from './lib322';

describe(' Lib322', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib322 />);
    expect(baseElement).toBeTruthy();
  });
});
