import React from 'react';
import { render } from '@testing-library/react';

import Lib597 from './lib597';

describe(' Lib597', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib597 />);
    expect(baseElement).toBeTruthy();
  });
});
