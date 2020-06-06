import React from 'react';
import { render } from '@testing-library/react';

import Lib391 from './lib391';

describe(' Lib391', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib391 />);
    expect(baseElement).toBeTruthy();
  });
});
