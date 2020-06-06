import React from 'react';
import { render } from '@testing-library/react';

import Lib380 from './lib380';

describe(' Lib380', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib380 />);
    expect(baseElement).toBeTruthy();
  });
});
