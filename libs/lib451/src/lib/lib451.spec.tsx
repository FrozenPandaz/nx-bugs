import React from 'react';
import { render } from '@testing-library/react';

import Lib451 from './lib451';

describe(' Lib451', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib451 />);
    expect(baseElement).toBeTruthy();
  });
});
