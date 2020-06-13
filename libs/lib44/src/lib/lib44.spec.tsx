import React from 'react';
import { render } from '@testing-library/react';

import Lib44 from './lib44';

describe(' Lib44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib44 />);
    expect(baseElement).toBeTruthy();
  });
});
