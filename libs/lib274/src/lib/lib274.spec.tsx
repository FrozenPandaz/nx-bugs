import React from 'react';
import { render } from '@testing-library/react';

import Lib274 from './lib274';

describe(' Lib274', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib274 />);
    expect(baseElement).toBeTruthy();
  });
});
