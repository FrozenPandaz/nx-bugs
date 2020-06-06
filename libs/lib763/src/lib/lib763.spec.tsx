import React from 'react';
import { render } from '@testing-library/react';

import Lib763 from './lib763';

describe(' Lib763', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib763 />);
    expect(baseElement).toBeTruthy();
  });
});
