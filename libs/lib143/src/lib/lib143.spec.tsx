import React from 'react';
import { render } from '@testing-library/react';

import Lib143 from './lib143';

describe(' Lib143', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib143 />);
    expect(baseElement).toBeTruthy();
  });
});
