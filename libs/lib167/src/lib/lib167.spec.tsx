import React from 'react';
import { render } from '@testing-library/react';

import Lib167 from './lib167';

describe(' Lib167', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib167 />);
    expect(baseElement).toBeTruthy();
  });
});
