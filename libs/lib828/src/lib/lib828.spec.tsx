import React from 'react';
import { render } from '@testing-library/react';

import Lib828 from './lib828';

describe(' Lib828', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib828 />);
    expect(baseElement).toBeTruthy();
  });
});
