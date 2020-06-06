import React from 'react';
import { render } from '@testing-library/react';

import Lib309 from './lib309';

describe(' Lib309', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib309 />);
    expect(baseElement).toBeTruthy();
  });
});
