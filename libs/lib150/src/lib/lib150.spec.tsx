import React from 'react';
import { render } from '@testing-library/react';

import Lib150 from './lib150';

describe(' Lib150', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib150 />);
    expect(baseElement).toBeTruthy();
  });
});
