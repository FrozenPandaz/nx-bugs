import React from 'react';
import { render } from '@testing-library/react';

import Lib517 from './lib517';

describe(' Lib517', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib517 />);
    expect(baseElement).toBeTruthy();
  });
});
