import React from 'react';
import { render } from '@testing-library/react';

import Lib657 from './lib657';

describe(' Lib657', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib657 />);
    expect(baseElement).toBeTruthy();
  });
});
