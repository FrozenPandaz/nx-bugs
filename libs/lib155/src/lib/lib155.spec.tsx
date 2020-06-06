import React from 'react';
import { render } from '@testing-library/react';

import Lib155 from './lib155';

describe(' Lib155', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib155 />);
    expect(baseElement).toBeTruthy();
  });
});
