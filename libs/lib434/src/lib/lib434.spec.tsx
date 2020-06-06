import React from 'react';
import { render } from '@testing-library/react';

import Lib434 from './lib434';

describe(' Lib434', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib434 />);
    expect(baseElement).toBeTruthy();
  });
});
