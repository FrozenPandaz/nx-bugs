import React from 'react';
import { render } from '@testing-library/react';

import Lib289 from './lib289';

describe(' Lib289', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib289 />);
    expect(baseElement).toBeTruthy();
  });
});
