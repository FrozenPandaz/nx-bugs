import React from 'react';
import { render } from '@testing-library/react';

import Lib562 from './lib562';

describe(' Lib562', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib562 />);
    expect(baseElement).toBeTruthy();
  });
});
