import React from 'react';
import { render } from '@testing-library/react';

import Lib386 from './lib386';

describe(' Lib386', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib386 />);
    expect(baseElement).toBeTruthy();
  });
});
