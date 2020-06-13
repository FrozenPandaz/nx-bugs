import React from 'react';
import { render } from '@testing-library/react';

import Lib224 from './lib224';

describe(' Lib224', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib224 />);
    expect(baseElement).toBeTruthy();
  });
});
