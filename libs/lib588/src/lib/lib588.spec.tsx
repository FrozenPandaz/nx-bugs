import React from 'react';
import { render } from '@testing-library/react';

import Lib588 from './lib588';

describe(' Lib588', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib588 />);
    expect(baseElement).toBeTruthy();
  });
});
