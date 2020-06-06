import React from 'react';
import { render } from '@testing-library/react';

import Lib625 from './lib625';

describe(' Lib625', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib625 />);
    expect(baseElement).toBeTruthy();
  });
});
