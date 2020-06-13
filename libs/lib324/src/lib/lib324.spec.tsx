import React from 'react';
import { render } from '@testing-library/react';

import Lib324 from './lib324';

describe(' Lib324', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib324 />);
    expect(baseElement).toBeTruthy();
  });
});
