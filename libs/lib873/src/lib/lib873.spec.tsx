import React from 'react';
import { render } from '@testing-library/react';

import Lib873 from './lib873';

describe(' Lib873', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib873 />);
    expect(baseElement).toBeTruthy();
  });
});
