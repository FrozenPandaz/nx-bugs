import React from 'react';
import { render } from '@testing-library/react';

import Lib817 from './lib817';

describe(' Lib817', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib817 />);
    expect(baseElement).toBeTruthy();
  });
});
