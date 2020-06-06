import React from 'react';
import { render } from '@testing-library/react';

import Lib356 from './lib356';

describe(' Lib356', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib356 />);
    expect(baseElement).toBeTruthy();
  });
});
