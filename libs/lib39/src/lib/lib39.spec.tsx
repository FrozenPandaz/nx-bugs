import React from 'react';
import { render } from '@testing-library/react';

import Lib39 from './lib39';

describe(' Lib39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib39 />);
    expect(baseElement).toBeTruthy();
  });
});
