import React from 'react';
import { render } from '@testing-library/react';

import Lib967 from './lib967';

describe(' Lib967', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib967 />);
    expect(baseElement).toBeTruthy();
  });
});
