import React from 'react';
import { render } from '@testing-library/react';

import Lib778 from './lib778';

describe(' Lib778', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib778 />);
    expect(baseElement).toBeTruthy();
  });
});
