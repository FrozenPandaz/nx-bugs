import React from 'react';
import { render } from '@testing-library/react';

import Lib982 from './lib982';

describe(' Lib982', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib982 />);
    expect(baseElement).toBeTruthy();
  });
});
