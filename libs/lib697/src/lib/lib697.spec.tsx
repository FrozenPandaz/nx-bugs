import React from 'react';
import { render } from '@testing-library/react';

import Lib697 from './lib697';

describe(' Lib697', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib697 />);
    expect(baseElement).toBeTruthy();
  });
});
