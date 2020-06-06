import React from 'react';
import { render } from '@testing-library/react';

import Lib943 from './lib943';

describe(' Lib943', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib943 />);
    expect(baseElement).toBeTruthy();
  });
});
