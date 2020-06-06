import React from 'react';
import { render } from '@testing-library/react';

import Lib207 from './lib207';

describe(' Lib207', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib207 />);
    expect(baseElement).toBeTruthy();
  });
});
