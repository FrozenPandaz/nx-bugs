import React from 'react';
import { render } from '@testing-library/react';

import Lib235 from './lib235';

describe(' Lib235', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib235 />);
    expect(baseElement).toBeTruthy();
  });
});
