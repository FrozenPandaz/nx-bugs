import React from 'react';
import { render } from '@testing-library/react';

import Lib535 from './lib535';

describe(' Lib535', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib535 />);
    expect(baseElement).toBeTruthy();
  });
});
