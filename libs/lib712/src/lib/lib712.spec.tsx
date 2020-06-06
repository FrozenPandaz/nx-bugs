import React from 'react';
import { render } from '@testing-library/react';

import Lib712 from './lib712';

describe(' Lib712', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib712 />);
    expect(baseElement).toBeTruthy();
  });
});
