import React from 'react';
import { render } from '@testing-library/react';

import Lib112 from './lib112';

describe(' Lib112', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib112 />);
    expect(baseElement).toBeTruthy();
  });
});
