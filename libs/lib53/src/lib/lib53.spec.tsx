import React from 'react';
import { render } from '@testing-library/react';

import Lib53 from './lib53';

describe(' Lib53', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib53 />);
    expect(baseElement).toBeTruthy();
  });
});
