import React from 'react';
import { render } from '@testing-library/react';

import Lib209 from './lib209';

describe(' Lib209', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib209 />);
    expect(baseElement).toBeTruthy();
  });
});
