import React from 'react';
import { render } from '@testing-library/react';

import Lib337 from './lib337';

describe(' Lib337', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib337 />);
    expect(baseElement).toBeTruthy();
  });
});
