import React from 'react';
import { render } from '@testing-library/react';

import Lib921 from './lib921';

describe(' Lib921', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib921 />);
    expect(baseElement).toBeTruthy();
  });
});
