import React from 'react';
import { render } from '@testing-library/react';

import Lib799 from './lib799';

describe(' Lib799', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib799 />);
    expect(baseElement).toBeTruthy();
  });
});
