import React from 'react';
import { render } from '@testing-library/react';

import Lib174 from './lib174';

describe(' Lib174', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib174 />);
    expect(baseElement).toBeTruthy();
  });
});
