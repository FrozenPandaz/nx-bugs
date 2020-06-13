import React from 'react';
import { render } from '@testing-library/react';

import Lib136 from './lib136';

describe(' Lib136', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib136 />);
    expect(baseElement).toBeTruthy();
  });
});
