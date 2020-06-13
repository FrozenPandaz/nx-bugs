import React from 'react';
import { render } from '@testing-library/react';

import Lib501 from './lib501';

describe(' Lib501', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib501 />);
    expect(baseElement).toBeTruthy();
  });
});
