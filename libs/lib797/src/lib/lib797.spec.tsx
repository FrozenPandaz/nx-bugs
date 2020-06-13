import React from 'react';
import { render } from '@testing-library/react';

import Lib797 from './lib797';

describe(' Lib797', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib797 />);
    expect(baseElement).toBeTruthy();
  });
});
