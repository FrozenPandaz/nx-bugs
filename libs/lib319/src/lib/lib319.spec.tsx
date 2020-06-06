import React from 'react';
import { render } from '@testing-library/react';

import Lib319 from './lib319';

describe(' Lib319', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib319 />);
    expect(baseElement).toBeTruthy();
  });
});
