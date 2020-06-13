import React from 'react';
import { render } from '@testing-library/react';

import Lib30 from './lib30';

describe(' Lib30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib30 />);
    expect(baseElement).toBeTruthy();
  });
});
