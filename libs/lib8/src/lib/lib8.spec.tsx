import React from 'react';
import { render } from '@testing-library/react';

import Lib8 from './lib8';

describe(' Lib8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib8 />);
    expect(baseElement).toBeTruthy();
  });
});
