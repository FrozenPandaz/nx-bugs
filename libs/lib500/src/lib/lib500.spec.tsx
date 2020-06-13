import React from 'react';
import { render } from '@testing-library/react';

import Lib500 from './lib500';

describe(' Lib500', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib500 />);
    expect(baseElement).toBeTruthy();
  });
});
