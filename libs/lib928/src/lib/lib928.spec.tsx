import React from 'react';
import { render } from '@testing-library/react';

import Lib928 from './lib928';

describe(' Lib928', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib928 />);
    expect(baseElement).toBeTruthy();
  });
});
