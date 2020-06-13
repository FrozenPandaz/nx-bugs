import React from 'react';
import { render } from '@testing-library/react';

import Lib61 from './lib61';

describe(' Lib61', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib61 />);
    expect(baseElement).toBeTruthy();
  });
});
