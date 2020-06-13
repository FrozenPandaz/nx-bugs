import React from 'react';
import { render } from '@testing-library/react';

import Lib239 from './lib239';

describe(' Lib239', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib239 />);
    expect(baseElement).toBeTruthy();
  });
});
