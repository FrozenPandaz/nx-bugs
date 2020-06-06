import React from 'react';
import { render } from '@testing-library/react';

import Lib840 from './lib840';

describe(' Lib840', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib840 />);
    expect(baseElement).toBeTruthy();
  });
});
