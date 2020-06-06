import React from 'react';
import { render } from '@testing-library/react';

import Lib981 from './lib981';

describe(' Lib981', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib981 />);
    expect(baseElement).toBeTruthy();
  });
});
