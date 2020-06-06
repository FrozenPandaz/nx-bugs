import React from 'react';
import { render } from '@testing-library/react';

import Lib978 from './lib978';

describe(' Lib978', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib978 />);
    expect(baseElement).toBeTruthy();
  });
});
