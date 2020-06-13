import React from 'react';
import { render } from '@testing-library/react';

import Lib482 from './lib482';

describe(' Lib482', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib482 />);
    expect(baseElement).toBeTruthy();
  });
});
