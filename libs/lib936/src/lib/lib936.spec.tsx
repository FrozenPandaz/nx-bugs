import React from 'react';
import { render } from '@testing-library/react';

import Lib936 from './lib936';

describe(' Lib936', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib936 />);
    expect(baseElement).toBeTruthy();
  });
});
