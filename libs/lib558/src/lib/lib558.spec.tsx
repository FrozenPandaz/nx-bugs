import React from 'react';
import { render } from '@testing-library/react';

import Lib558 from './lib558';

describe(' Lib558', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib558 />);
    expect(baseElement).toBeTruthy();
  });
});
