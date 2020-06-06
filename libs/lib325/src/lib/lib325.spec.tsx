import React from 'react';
import { render } from '@testing-library/react';

import Lib325 from './lib325';

describe(' Lib325', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib325 />);
    expect(baseElement).toBeTruthy();
  });
});
