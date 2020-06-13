import React from 'react';
import { render } from '@testing-library/react';

import Lib762 from './lib762';

describe(' Lib762', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib762 />);
    expect(baseElement).toBeTruthy();
  });
});
