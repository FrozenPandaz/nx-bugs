import React from 'react';
import { render } from '@testing-library/react';

import Lib585 from './lib585';

describe(' Lib585', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib585 />);
    expect(baseElement).toBeTruthy();
  });
});
