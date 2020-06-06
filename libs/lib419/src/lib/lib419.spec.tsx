import React from 'react';
import { render } from '@testing-library/react';

import Lib419 from './lib419';

describe(' Lib419', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib419 />);
    expect(baseElement).toBeTruthy();
  });
});
