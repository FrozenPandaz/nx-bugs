import React from 'react';
import { render } from '@testing-library/react';

import Lib89 from './lib89';

describe(' Lib89', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib89 />);
    expect(baseElement).toBeTruthy();
  });
});
