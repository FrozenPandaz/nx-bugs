import React from 'react';
import { render } from '@testing-library/react';

import Lib907 from './lib907';

describe(' Lib907', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib907 />);
    expect(baseElement).toBeTruthy();
  });
});
