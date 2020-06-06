import React from 'react';
import { render } from '@testing-library/react';

import Lib330 from './lib330';

describe(' Lib330', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib330 />);
    expect(baseElement).toBeTruthy();
  });
});
