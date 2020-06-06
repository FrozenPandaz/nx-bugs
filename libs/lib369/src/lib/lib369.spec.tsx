import React from 'react';
import { render } from '@testing-library/react';

import Lib369 from './lib369';

describe(' Lib369', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib369 />);
    expect(baseElement).toBeTruthy();
  });
});
