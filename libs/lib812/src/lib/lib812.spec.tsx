import React from 'react';
import { render } from '@testing-library/react';

import Lib812 from './lib812';

describe(' Lib812', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib812 />);
    expect(baseElement).toBeTruthy();
  });
});
