import React from 'react';
import { render } from '@testing-library/react';

import Lib57 from './lib57';

describe(' Lib57', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib57 />);
    expect(baseElement).toBeTruthy();
  });
});
