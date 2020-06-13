import React from 'react';
import { render } from '@testing-library/react';

import Lib282 from './lib282';

describe(' Lib282', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib282 />);
    expect(baseElement).toBeTruthy();
  });
});
