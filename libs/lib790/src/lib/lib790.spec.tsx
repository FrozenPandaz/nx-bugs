import React from 'react';
import { render } from '@testing-library/react';

import Lib790 from './lib790';

describe(' Lib790', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib790 />);
    expect(baseElement).toBeTruthy();
  });
});
