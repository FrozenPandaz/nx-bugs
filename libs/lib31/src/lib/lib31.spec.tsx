import React from 'react';
import { render } from '@testing-library/react';

import Lib31 from './lib31';

describe(' Lib31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib31 />);
    expect(baseElement).toBeTruthy();
  });
});
