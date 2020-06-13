import React from 'react';
import { render } from '@testing-library/react';

import Lib723 from './lib723';

describe(' Lib723', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib723 />);
    expect(baseElement).toBeTruthy();
  });
});
