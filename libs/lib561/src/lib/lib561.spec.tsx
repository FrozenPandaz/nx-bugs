import React from 'react';
import { render } from '@testing-library/react';

import Lib561 from './lib561';

describe(' Lib561', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib561 />);
    expect(baseElement).toBeTruthy();
  });
});
