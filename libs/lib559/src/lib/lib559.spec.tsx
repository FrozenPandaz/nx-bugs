import React from 'react';
import { render } from '@testing-library/react';

import Lib559 from './lib559';

describe(' Lib559', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib559 />);
    expect(baseElement).toBeTruthy();
  });
});
