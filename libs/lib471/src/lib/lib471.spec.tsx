import React from 'react';
import { render } from '@testing-library/react';

import Lib471 from './lib471';

describe(' Lib471', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib471 />);
    expect(baseElement).toBeTruthy();
  });
});
