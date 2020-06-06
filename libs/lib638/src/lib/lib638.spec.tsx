import React from 'react';
import { render } from '@testing-library/react';

import Lib638 from './lib638';

describe(' Lib638', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib638 />);
    expect(baseElement).toBeTruthy();
  });
});
