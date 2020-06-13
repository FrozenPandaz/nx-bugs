import React from 'react';
import { render } from '@testing-library/react';

import Lib954 from './lib954';

describe(' Lib954', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib954 />);
    expect(baseElement).toBeTruthy();
  });
});
