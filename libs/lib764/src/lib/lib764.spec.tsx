import React from 'react';
import { render } from '@testing-library/react';

import Lib764 from './lib764';

describe(' Lib764', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib764 />);
    expect(baseElement).toBeTruthy();
  });
});
