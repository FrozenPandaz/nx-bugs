import React from 'react';
import { render } from '@testing-library/react';

import Lib38 from './lib38';

describe(' Lib38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib38 />);
    expect(baseElement).toBeTruthy();
  });
});
