import React from 'react';
import { render } from '@testing-library/react';

import Lib307 from './lib307';

describe(' Lib307', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib307 />);
    expect(baseElement).toBeTruthy();
  });
});
