import React from 'react';
import { render } from '@testing-library/react';

import Lib297 from './lib297';

describe(' Lib297', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib297 />);
    expect(baseElement).toBeTruthy();
  });
});
