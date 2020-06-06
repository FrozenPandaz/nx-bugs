import React from 'react';
import { render } from '@testing-library/react';

import Lib433 from './lib433';

describe(' Lib433', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib433 />);
    expect(baseElement).toBeTruthy();
  });
});
