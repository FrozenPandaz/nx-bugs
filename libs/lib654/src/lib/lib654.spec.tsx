import React from 'react';
import { render } from '@testing-library/react';

import Lib654 from './lib654';

describe(' Lib654', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib654 />);
    expect(baseElement).toBeTruthy();
  });
});
