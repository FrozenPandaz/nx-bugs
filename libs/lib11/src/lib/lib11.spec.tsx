import React from 'react';
import { render } from '@testing-library/react';

import Lib11 from './lib11';

describe(' Lib11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib11 />);
    expect(baseElement).toBeTruthy();
  });
});
