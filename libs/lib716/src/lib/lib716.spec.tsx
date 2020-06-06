import React from 'react';
import { render } from '@testing-library/react';

import Lib716 from './lib716';

describe(' Lib716', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib716 />);
    expect(baseElement).toBeTruthy();
  });
});
