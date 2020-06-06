import React from 'react';
import { render } from '@testing-library/react';

import Lib703 from './lib703';

describe(' Lib703', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib703 />);
    expect(baseElement).toBeTruthy();
  });
});
