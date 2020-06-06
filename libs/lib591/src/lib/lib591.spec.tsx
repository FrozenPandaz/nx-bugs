import React from 'react';
import { render } from '@testing-library/react';

import Lib591 from './lib591';

describe(' Lib591', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib591 />);
    expect(baseElement).toBeTruthy();
  });
});
