import React from 'react';
import { render } from '@testing-library/react';

import Lib637 from './lib637';

describe(' Lib637', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib637 />);
    expect(baseElement).toBeTruthy();
  });
});
