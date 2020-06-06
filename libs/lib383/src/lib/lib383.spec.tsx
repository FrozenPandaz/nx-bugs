import React from 'react';
import { render } from '@testing-library/react';

import Lib383 from './lib383';

describe(' Lib383', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib383 />);
    expect(baseElement).toBeTruthy();
  });
});
