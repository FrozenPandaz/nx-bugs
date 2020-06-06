import React from 'react';
import { render } from '@testing-library/react';

import Lib783 from './lib783';

describe(' Lib783', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib783 />);
    expect(baseElement).toBeTruthy();
  });
});
