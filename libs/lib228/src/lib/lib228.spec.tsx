import React from 'react';
import { render } from '@testing-library/react';

import Lib228 from './lib228';

describe(' Lib228', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib228 />);
    expect(baseElement).toBeTruthy();
  });
});
