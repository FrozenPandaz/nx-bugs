import React from 'react';
import { render } from '@testing-library/react';

import Lib816 from './lib816';

describe(' Lib816', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib816 />);
    expect(baseElement).toBeTruthy();
  });
});
