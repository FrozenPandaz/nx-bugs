import React from 'react';
import { render } from '@testing-library/react';

import Lib259 from './lib259';

describe(' Lib259', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib259 />);
    expect(baseElement).toBeTruthy();
  });
});
