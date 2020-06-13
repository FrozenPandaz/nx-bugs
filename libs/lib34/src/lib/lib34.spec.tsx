import React from 'react';
import { render } from '@testing-library/react';

import Lib34 from './lib34';

describe(' Lib34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib34 />);
    expect(baseElement).toBeTruthy();
  });
});
