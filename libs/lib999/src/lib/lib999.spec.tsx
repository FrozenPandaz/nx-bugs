import React from 'react';
import { render } from '@testing-library/react';

import Lib999 from './lib999';

describe(' Lib999', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib999 />);
    expect(baseElement).toBeTruthy();
  });
});
