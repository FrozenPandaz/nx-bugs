import React from 'react';
import { render } from '@testing-library/react';

import Lib906 from './lib906';

describe(' Lib906', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib906 />);
    expect(baseElement).toBeTruthy();
  });
});
