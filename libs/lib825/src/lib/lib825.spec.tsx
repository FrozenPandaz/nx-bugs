import React from 'react';
import { render } from '@testing-library/react';

import Lib825 from './lib825';

describe(' Lib825', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib825 />);
    expect(baseElement).toBeTruthy();
  });
});
