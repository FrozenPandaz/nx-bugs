import React from 'react';
import { render } from '@testing-library/react';

import Lib843 from './lib843';

describe(' Lib843', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib843 />);
    expect(baseElement).toBeTruthy();
  });
});
