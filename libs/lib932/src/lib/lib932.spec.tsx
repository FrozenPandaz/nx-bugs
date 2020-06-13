import React from 'react';
import { render } from '@testing-library/react';

import Lib932 from './lib932';

describe(' Lib932', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib932 />);
    expect(baseElement).toBeTruthy();
  });
});
