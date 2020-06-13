import React from 'react';
import { render } from '@testing-library/react';

import Lib301 from './lib301';

describe(' Lib301', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib301 />);
    expect(baseElement).toBeTruthy();
  });
});
