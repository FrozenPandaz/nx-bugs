import React from 'react';
import { render } from '@testing-library/react';

import Lib464 from './lib464';

describe(' Lib464', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib464 />);
    expect(baseElement).toBeTruthy();
  });
});
