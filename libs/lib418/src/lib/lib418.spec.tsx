import React from 'react';
import { render } from '@testing-library/react';

import Lib418 from './lib418';

describe(' Lib418', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib418 />);
    expect(baseElement).toBeTruthy();
  });
});
