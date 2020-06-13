import React from 'react';
import { render } from '@testing-library/react';

import Lib245 from './lib245';

describe(' Lib245', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib245 />);
    expect(baseElement).toBeTruthy();
  });
});
