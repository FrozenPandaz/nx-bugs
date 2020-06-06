import React from 'react';
import { render } from '@testing-library/react';

import Lib472 from './lib472';

describe(' Lib472', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib472 />);
    expect(baseElement).toBeTruthy();
  });
});
