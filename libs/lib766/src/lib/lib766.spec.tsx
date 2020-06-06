import React from 'react';
import { render } from '@testing-library/react';

import Lib766 from './lib766';

describe(' Lib766', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib766 />);
    expect(baseElement).toBeTruthy();
  });
});
