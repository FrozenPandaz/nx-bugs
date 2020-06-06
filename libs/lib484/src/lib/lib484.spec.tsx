import React from 'react';
import { render } from '@testing-library/react';

import Lib484 from './lib484';

describe(' Lib484', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib484 />);
    expect(baseElement).toBeTruthy();
  });
});
