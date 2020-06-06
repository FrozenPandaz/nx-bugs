import React from 'react';
import { render } from '@testing-library/react';

import Lib43 from './lib43';

describe(' Lib43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib43 />);
    expect(baseElement).toBeTruthy();
  });
});
