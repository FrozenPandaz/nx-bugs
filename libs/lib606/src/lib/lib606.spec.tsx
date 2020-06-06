import React from 'react';
import { render } from '@testing-library/react';

import Lib606 from './lib606';

describe(' Lib606', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib606 />);
    expect(baseElement).toBeTruthy();
  });
});
