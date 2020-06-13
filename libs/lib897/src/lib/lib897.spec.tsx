import React from 'react';
import { render } from '@testing-library/react';

import Lib897 from './lib897';

describe(' Lib897', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib897 />);
    expect(baseElement).toBeTruthy();
  });
});
