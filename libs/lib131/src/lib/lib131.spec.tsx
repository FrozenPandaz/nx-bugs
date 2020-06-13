import React from 'react';
import { render } from '@testing-library/react';

import Lib131 from './lib131';

describe(' Lib131', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib131 />);
    expect(baseElement).toBeTruthy();
  });
});
