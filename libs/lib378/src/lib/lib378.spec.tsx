import React from 'react';
import { render } from '@testing-library/react';

import Lib378 from './lib378';

describe(' Lib378', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib378 />);
    expect(baseElement).toBeTruthy();
  });
});
