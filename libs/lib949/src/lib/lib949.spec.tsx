import React from 'react';
import { render } from '@testing-library/react';

import Lib949 from './lib949';

describe(' Lib949', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib949 />);
    expect(baseElement).toBeTruthy();
  });
});
