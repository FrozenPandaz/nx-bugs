import React from 'react';
import { render } from '@testing-library/react';

import Lib286 from './lib286';

describe(' Lib286', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib286 />);
    expect(baseElement).toBeTruthy();
  });
});
