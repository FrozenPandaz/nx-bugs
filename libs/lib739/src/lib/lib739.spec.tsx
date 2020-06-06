import React from 'react';
import { render } from '@testing-library/react';

import Lib739 from './lib739';

describe(' Lib739', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib739 />);
    expect(baseElement).toBeTruthy();
  });
});
