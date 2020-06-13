import React from 'react';
import { render } from '@testing-library/react';

import Lib345 from './lib345';

describe(' Lib345', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib345 />);
    expect(baseElement).toBeTruthy();
  });
});
