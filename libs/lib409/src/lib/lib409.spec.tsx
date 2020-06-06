import React from 'react';
import { render } from '@testing-library/react';

import Lib409 from './lib409';

describe(' Lib409', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib409 />);
    expect(baseElement).toBeTruthy();
  });
});
