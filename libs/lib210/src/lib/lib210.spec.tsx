import React from 'react';
import { render } from '@testing-library/react';

import Lib210 from './lib210';

describe(' Lib210', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib210 />);
    expect(baseElement).toBeTruthy();
  });
});
