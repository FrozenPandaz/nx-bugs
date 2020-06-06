import React from 'react';
import { render } from '@testing-library/react';

import Lib251 from './lib251';

describe(' Lib251', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib251 />);
    expect(baseElement).toBeTruthy();
  });
});
