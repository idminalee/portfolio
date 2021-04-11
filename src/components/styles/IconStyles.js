import styled from 'styled-components'
import * as colour from './constants/colours'
import { displayFlex } from './mixins/flexbox'

export const IconContainer = styled.div`
  ${displayFlex('inline-flex')};
  width: 32px;
  height: 32px;

  .icon {
    color: ${colour.BLUE};
    transition: color ease-in-out 200ms;

    &:hover {
      color: ${colour.BLUE_DARK};
    }
  }

  .dimmed {
    color: ${colour.SECONDARY};

    &:hover {
      color: ${colour.BLUE};
    }
  }
`
