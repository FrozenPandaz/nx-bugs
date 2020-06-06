import React from 'react';
import { render } from '@testing-library/react';

import Lib525 from './lib525';

describe(' Lib525', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib525 />);
    expect(baseElement).toBeTruthy();
  });
});
