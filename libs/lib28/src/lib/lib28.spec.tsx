import React from 'react';
import { render } from '@testing-library/react';

import Lib28 from './lib28';

describe(' Lib28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib28 />);
    expect(baseElement).toBeTruthy();
  });
});
