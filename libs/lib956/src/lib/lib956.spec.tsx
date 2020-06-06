import React from 'react';
import { render } from '@testing-library/react';

import Lib956 from './lib956';

describe(' Lib956', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib956 />);
    expect(baseElement).toBeTruthy();
  });
});
