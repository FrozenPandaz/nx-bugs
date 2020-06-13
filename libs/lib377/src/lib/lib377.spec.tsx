import React from 'react';
import { render } from '@testing-library/react';

import Lib377 from './lib377';

describe(' Lib377', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib377 />);
    expect(baseElement).toBeTruthy();
  });
});
