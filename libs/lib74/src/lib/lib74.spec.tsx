import React from 'react';
import { render } from '@testing-library/react';

import Lib74 from './lib74';

describe(' Lib74', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib74 />);
    expect(baseElement).toBeTruthy();
  });
});
