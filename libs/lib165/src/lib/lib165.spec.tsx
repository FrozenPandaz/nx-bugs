import React from 'react';
import { render } from '@testing-library/react';

import Lib165 from './lib165';

describe(' Lib165', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib165 />);
    expect(baseElement).toBeTruthy();
  });
});
