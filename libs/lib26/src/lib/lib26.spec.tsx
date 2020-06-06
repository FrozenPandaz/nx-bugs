import React from 'react';
import { render } from '@testing-library/react';

import Lib26 from './lib26';

describe(' Lib26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib26 />);
    expect(baseElement).toBeTruthy();
  });
});
