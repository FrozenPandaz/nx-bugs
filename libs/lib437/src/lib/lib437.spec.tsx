import React from 'react';
import { render } from '@testing-library/react';

import Lib437 from './lib437';

describe(' Lib437', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib437 />);
    expect(baseElement).toBeTruthy();
  });
});
