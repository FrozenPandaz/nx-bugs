import React from 'react';
import { render } from '@testing-library/react';

import Lib748 from './lib748';

describe(' Lib748', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib748 />);
    expect(baseElement).toBeTruthy();
  });
});
