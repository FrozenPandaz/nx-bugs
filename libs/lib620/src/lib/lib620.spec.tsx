import React from 'react';
import { render } from '@testing-library/react';

import Lib620 from './lib620';

describe(' Lib620', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib620 />);
    expect(baseElement).toBeTruthy();
  });
});
