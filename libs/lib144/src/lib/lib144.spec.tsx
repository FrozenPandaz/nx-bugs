import React from 'react';
import { render } from '@testing-library/react';

import Lib144 from './lib144';

describe(' Lib144', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib144 />);
    expect(baseElement).toBeTruthy();
  });
});
