import React from 'react';
import { render } from '@testing-library/react';

import Lib358 from './lib358';

describe(' Lib358', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib358 />);
    expect(baseElement).toBeTruthy();
  });
});
