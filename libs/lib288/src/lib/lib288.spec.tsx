import React from 'react';
import { render } from '@testing-library/react';

import Lib288 from './lib288';

describe(' Lib288', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib288 />);
    expect(baseElement).toBeTruthy();
  });
});
