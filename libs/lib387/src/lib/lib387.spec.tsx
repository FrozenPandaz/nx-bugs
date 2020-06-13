import React from 'react';
import { render } from '@testing-library/react';

import Lib387 from './lib387';

describe(' Lib387', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib387 />);
    expect(baseElement).toBeTruthy();
  });
});
