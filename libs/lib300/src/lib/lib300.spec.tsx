import React from 'react';
import { render } from '@testing-library/react';

import Lib300 from './lib300';

describe(' Lib300', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib300 />);
    expect(baseElement).toBeTruthy();
  });
});
