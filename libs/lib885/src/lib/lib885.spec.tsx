import React from 'react';
import { render } from '@testing-library/react';

import Lib885 from './lib885';

describe(' Lib885', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib885 />);
    expect(baseElement).toBeTruthy();
  });
});
