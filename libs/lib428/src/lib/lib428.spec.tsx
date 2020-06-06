import React from 'react';
import { render } from '@testing-library/react';

import Lib428 from './lib428';

describe(' Lib428', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib428 />);
    expect(baseElement).toBeTruthy();
  });
});
