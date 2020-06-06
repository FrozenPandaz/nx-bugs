import React from 'react';
import { render } from '@testing-library/react';

import Lib476 from './lib476';

describe(' Lib476', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib476 />);
    expect(baseElement).toBeTruthy();
  });
});
