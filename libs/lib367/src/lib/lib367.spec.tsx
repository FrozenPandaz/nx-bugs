import React from 'react';
import { render } from '@testing-library/react';

import Lib367 from './lib367';

describe(' Lib367', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib367 />);
    expect(baseElement).toBeTruthy();
  });
});
