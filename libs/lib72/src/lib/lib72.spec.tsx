import React from 'react';
import { render } from '@testing-library/react';

import Lib72 from './lib72';

describe(' Lib72', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib72 />);
    expect(baseElement).toBeTruthy();
  });
});
