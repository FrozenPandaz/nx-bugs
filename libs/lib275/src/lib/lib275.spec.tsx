import React from 'react';
import { render } from '@testing-library/react';

import Lib275 from './lib275';

describe(' Lib275', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib275 />);
    expect(baseElement).toBeTruthy();
  });
});
