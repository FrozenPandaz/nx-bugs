import React from 'react';
import { render } from '@testing-library/react';

import Lib854 from './lib854';

describe(' Lib854', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib854 />);
    expect(baseElement).toBeTruthy();
  });
});
