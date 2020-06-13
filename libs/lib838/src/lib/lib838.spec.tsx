import React from 'react';
import { render } from '@testing-library/react';

import Lib838 from './lib838';

describe(' Lib838', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib838 />);
    expect(baseElement).toBeTruthy();
  });
});
