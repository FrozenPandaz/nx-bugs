import React from 'react';
import { render } from '@testing-library/react';

import Lib305 from './lib305';

describe(' Lib305', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib305 />);
    expect(baseElement).toBeTruthy();
  });
});
