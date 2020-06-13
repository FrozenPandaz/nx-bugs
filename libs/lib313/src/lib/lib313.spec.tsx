import React from 'react';
import { render } from '@testing-library/react';

import Lib313 from './lib313';

describe(' Lib313', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib313 />);
    expect(baseElement).toBeTruthy();
  });
});
