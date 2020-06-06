import React from 'react';
import { render } from '@testing-library/react';

import Lib266 from './lib266';

describe(' Lib266', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib266 />);
    expect(baseElement).toBeTruthy();
  });
});
