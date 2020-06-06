import React from 'react';
import { render } from '@testing-library/react';

import Lib513 from './lib513';

describe(' Lib513', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib513 />);
    expect(baseElement).toBeTruthy();
  });
});
