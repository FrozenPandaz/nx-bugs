import React from 'react';
import { render } from '@testing-library/react';

import Lib491 from './lib491';

describe(' Lib491', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib491 />);
    expect(baseElement).toBeTruthy();
  });
});
