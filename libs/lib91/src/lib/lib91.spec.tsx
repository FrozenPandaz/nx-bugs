import React from 'react';
import { render } from '@testing-library/react';

import Lib91 from './lib91';

describe(' Lib91', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib91 />);
    expect(baseElement).toBeTruthy();
  });
});
