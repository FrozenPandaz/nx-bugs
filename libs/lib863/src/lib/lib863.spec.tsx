import React from 'react';
import { render } from '@testing-library/react';

import Lib863 from './lib863';

describe(' Lib863', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib863 />);
    expect(baseElement).toBeTruthy();
  });
});
