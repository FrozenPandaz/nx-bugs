import React from 'react';
import { render } from '@testing-library/react';

import Lib97 from './lib97';

describe(' Lib97', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib97 />);
    expect(baseElement).toBeTruthy();
  });
});
