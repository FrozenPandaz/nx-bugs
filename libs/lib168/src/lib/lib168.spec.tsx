import React from 'react';
import { render } from '@testing-library/react';

import Lib168 from './lib168';

describe(' Lib168', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib168 />);
    expect(baseElement).toBeTruthy();
  });
});
