import React from 'react';
import { render } from '@testing-library/react';

import Lib262 from './lib262';

describe(' Lib262', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib262 />);
    expect(baseElement).toBeTruthy();
  });
});
