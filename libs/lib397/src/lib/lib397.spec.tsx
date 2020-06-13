import React from 'react';
import { render } from '@testing-library/react';

import Lib397 from './lib397';

describe(' Lib397', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib397 />);
    expect(baseElement).toBeTruthy();
  });
});
