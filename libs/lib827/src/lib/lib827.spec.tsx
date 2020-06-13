import React from 'react';
import { render } from '@testing-library/react';

import Lib827 from './lib827';

describe(' Lib827', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib827 />);
    expect(baseElement).toBeTruthy();
  });
});
