import React from 'react';
import { render } from '@testing-library/react';

import Lib556 from './lib556';

describe(' Lib556', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib556 />);
    expect(baseElement).toBeTruthy();
  });
});
