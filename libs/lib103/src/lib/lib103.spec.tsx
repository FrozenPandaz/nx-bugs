import React from 'react';
import { render } from '@testing-library/react';

import Lib103 from './lib103';

describe(' Lib103', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib103 />);
    expect(baseElement).toBeTruthy();
  });
});
