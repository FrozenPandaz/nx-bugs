import React from 'react';
import { render } from '@testing-library/react';

import Lib344 from './lib344';

describe(' Lib344', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib344 />);
    expect(baseElement).toBeTruthy();
  });
});
