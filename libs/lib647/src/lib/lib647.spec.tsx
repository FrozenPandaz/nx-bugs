import React from 'react';
import { render } from '@testing-library/react';

import Lib647 from './lib647';

describe(' Lib647', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib647 />);
    expect(baseElement).toBeTruthy();
  });
});
