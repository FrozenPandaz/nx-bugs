import React from 'react';
import { render } from '@testing-library/react';

import Lib317 from './lib317';

describe(' Lib317', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib317 />);
    expect(baseElement).toBeTruthy();
  });
});
