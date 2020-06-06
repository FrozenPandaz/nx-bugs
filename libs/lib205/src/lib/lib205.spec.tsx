import React from 'react';
import { render } from '@testing-library/react';

import Lib205 from './lib205';

describe(' Lib205', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib205 />);
    expect(baseElement).toBeTruthy();
  });
});
