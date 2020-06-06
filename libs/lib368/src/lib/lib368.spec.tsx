import React from 'react';
import { render } from '@testing-library/react';

import Lib368 from './lib368';

describe(' Lib368', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib368 />);
    expect(baseElement).toBeTruthy();
  });
});
