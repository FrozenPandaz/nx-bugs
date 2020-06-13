import React from 'react';
import { render } from '@testing-library/react';

import Lib343 from './lib343';

describe(' Lib343', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib343 />);
    expect(baseElement).toBeTruthy();
  });
});
