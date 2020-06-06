import React from 'react';
import { render } from '@testing-library/react';

import Lib157 from './lib157';

describe(' Lib157', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib157 />);
    expect(baseElement).toBeTruthy();
  });
});
