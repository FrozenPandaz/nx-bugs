import React from 'react';
import { render } from '@testing-library/react';

import Lib736 from './lib736';

describe(' Lib736', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib736 />);
    expect(baseElement).toBeTruthy();
  });
});
