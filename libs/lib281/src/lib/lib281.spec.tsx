import React from 'react';
import { render } from '@testing-library/react';

import Lib281 from './lib281';

describe(' Lib281', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib281 />);
    expect(baseElement).toBeTruthy();
  });
});
