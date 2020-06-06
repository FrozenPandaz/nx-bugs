import React from 'react';
import { render } from '@testing-library/react';

import Lib503 from './lib503';

describe(' Lib503', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib503 />);
    expect(baseElement).toBeTruthy();
  });
});
