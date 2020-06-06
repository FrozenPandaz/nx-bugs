import React from 'react';
import { render } from '@testing-library/react';

import Lib894 from './lib894';

describe(' Lib894', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib894 />);
    expect(baseElement).toBeTruthy();
  });
});
