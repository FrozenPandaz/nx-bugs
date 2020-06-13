import React from 'react';
import { render } from '@testing-library/react';

import Lib824 from './lib824';

describe(' Lib824', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib824 />);
    expect(baseElement).toBeTruthy();
  });
});
