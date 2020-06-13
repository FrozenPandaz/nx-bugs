import React from 'react';
import { render } from '@testing-library/react';

import Lib254 from './lib254';

describe(' Lib254', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib254 />);
    expect(baseElement).toBeTruthy();
  });
});
