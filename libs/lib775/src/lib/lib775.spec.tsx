import React from 'react';
import { render } from '@testing-library/react';

import Lib775 from './lib775';

describe(' Lib775', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib775 />);
    expect(baseElement).toBeTruthy();
  });
});
