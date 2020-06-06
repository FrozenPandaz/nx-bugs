import React from 'react';
import { render } from '@testing-library/react';

import Lib747 from './lib747';

describe(' Lib747', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib747 />);
    expect(baseElement).toBeTruthy();
  });
});
