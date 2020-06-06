import React from 'react';
import { render } from '@testing-library/react';

import Lib338 from './lib338';

describe(' Lib338', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib338 />);
    expect(baseElement).toBeTruthy();
  });
});
