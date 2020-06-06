import React from 'react';
import { render } from '@testing-library/react';

import Lib874 from './lib874';

describe(' Lib874', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib874 />);
    expect(baseElement).toBeTruthy();
  });
});
