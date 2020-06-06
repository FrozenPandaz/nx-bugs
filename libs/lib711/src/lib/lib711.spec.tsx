import React from 'react';
import { render } from '@testing-library/react';

import Lib711 from './lib711';

describe(' Lib711', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib711 />);
    expect(baseElement).toBeTruthy();
  });
});
