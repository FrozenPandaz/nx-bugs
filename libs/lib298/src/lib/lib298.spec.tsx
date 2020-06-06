import React from 'react';
import { render } from '@testing-library/react';

import Lib298 from './lib298';

describe(' Lib298', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib298 />);
    expect(baseElement).toBeTruthy();
  });
});
