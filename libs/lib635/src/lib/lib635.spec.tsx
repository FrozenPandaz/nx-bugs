import React from 'react';
import { render } from '@testing-library/react';

import Lib635 from './lib635';

describe(' Lib635', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib635 />);
    expect(baseElement).toBeTruthy();
  });
});
