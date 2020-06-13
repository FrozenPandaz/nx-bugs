import React from 'react';
import { render } from '@testing-library/react';

import Lib617 from './lib617';

describe(' Lib617', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib617 />);
    expect(baseElement).toBeTruthy();
  });
});
