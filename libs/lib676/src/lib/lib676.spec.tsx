import React from 'react';
import { render } from '@testing-library/react';

import Lib676 from './lib676';

describe(' Lib676', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib676 />);
    expect(baseElement).toBeTruthy();
  });
});
