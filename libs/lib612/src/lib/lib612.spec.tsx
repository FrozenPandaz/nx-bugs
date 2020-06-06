import React from 'react';
import { render } from '@testing-library/react';

import Lib612 from './lib612';

describe(' Lib612', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib612 />);
    expect(baseElement).toBeTruthy();
  });
});
