import React from 'react';
import { render } from '@testing-library/react';

import Lib406 from './lib406';

describe(' Lib406', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib406 />);
    expect(baseElement).toBeTruthy();
  });
});
