import React from 'react';
import { render } from '@testing-library/react';

import Lib849 from './lib849';

describe(' Lib849', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib849 />);
    expect(baseElement).toBeTruthy();
  });
});
