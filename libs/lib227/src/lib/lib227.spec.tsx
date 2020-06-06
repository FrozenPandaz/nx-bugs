import React from 'react';
import { render } from '@testing-library/react';

import Lib227 from './lib227';

describe(' Lib227', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib227 />);
    expect(baseElement).toBeTruthy();
  });
});
