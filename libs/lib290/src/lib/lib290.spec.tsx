import React from 'react';
import { render } from '@testing-library/react';

import Lib290 from './lib290';

describe(' Lib290', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib290 />);
    expect(baseElement).toBeTruthy();
  });
});
