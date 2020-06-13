import React from 'react';
import { render } from '@testing-library/react';

import Lib902 from './lib902';

describe(' Lib902', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib902 />);
    expect(baseElement).toBeTruthy();
  });
});
