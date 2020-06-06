import React from 'react';
import { render } from '@testing-library/react';

import Lib104 from './lib104';

describe(' Lib104', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib104 />);
    expect(baseElement).toBeTruthy();
  });
});
