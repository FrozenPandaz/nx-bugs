import React from 'react';
import { render } from '@testing-library/react';

import Lib302 from './lib302';

describe(' Lib302', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib302 />);
    expect(baseElement).toBeTruthy();
  });
});
