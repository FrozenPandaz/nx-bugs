import React from 'react';
import { render } from '@testing-library/react';

import Lib223 from './lib223';

describe(' Lib223', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib223 />);
    expect(baseElement).toBeTruthy();
  });
});
