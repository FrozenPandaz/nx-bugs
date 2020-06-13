import React from 'react';
import { render } from '@testing-library/react';

import Lib463 from './lib463';

describe(' Lib463', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib463 />);
    expect(baseElement).toBeTruthy();
  });
});
