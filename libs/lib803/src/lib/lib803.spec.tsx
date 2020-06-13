import React from 'react';
import { render } from '@testing-library/react';

import Lib803 from './lib803';

describe(' Lib803', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib803 />);
    expect(baseElement).toBeTruthy();
  });
});
