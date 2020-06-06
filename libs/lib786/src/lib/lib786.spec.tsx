import React from 'react';
import { render } from '@testing-library/react';

import Lib786 from './lib786';

describe(' Lib786', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib786 />);
    expect(baseElement).toBeTruthy();
  });
});
