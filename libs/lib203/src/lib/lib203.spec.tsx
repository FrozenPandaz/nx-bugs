import React from 'react';
import { render } from '@testing-library/react';

import Lib203 from './lib203';

describe(' Lib203', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib203 />);
    expect(baseElement).toBeTruthy();
  });
});
