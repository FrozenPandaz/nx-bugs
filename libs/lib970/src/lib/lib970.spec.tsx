import React from 'react';
import { render } from '@testing-library/react';

import Lib970 from './lib970';

describe(' Lib970', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib970 />);
    expect(baseElement).toBeTruthy();
  });
});
