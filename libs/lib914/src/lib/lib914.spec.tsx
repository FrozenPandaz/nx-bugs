import React from 'react';
import { render } from '@testing-library/react';

import Lib914 from './lib914';

describe(' Lib914', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib914 />);
    expect(baseElement).toBeTruthy();
  });
});
