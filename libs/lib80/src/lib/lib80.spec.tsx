import React from 'react';
import { render } from '@testing-library/react';

import Lib80 from './lib80';

describe(' Lib80', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib80 />);
    expect(baseElement).toBeTruthy();
  });
});
