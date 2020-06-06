import React from 'react';
import { render } from '@testing-library/react';

import Lib798 from './lib798';

describe(' Lib798', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib798 />);
    expect(baseElement).toBeTruthy();
  });
});
