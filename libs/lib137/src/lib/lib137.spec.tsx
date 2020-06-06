import React from 'react';
import { render } from '@testing-library/react';

import Lib137 from './lib137';

describe(' Lib137', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib137 />);
    expect(baseElement).toBeTruthy();
  });
});
