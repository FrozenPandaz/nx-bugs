import React from 'react';
import { render } from '@testing-library/react';

import Lib730 from './lib730';

describe(' Lib730', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib730 />);
    expect(baseElement).toBeTruthy();
  });
});
