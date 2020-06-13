import React from 'react';
import { render } from '@testing-library/react';

import Lib117 from './lib117';

describe(' Lib117', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib117 />);
    expect(baseElement).toBeTruthy();
  });
});
