import styled from 'styled-components'
import { FONT_12 } from './constants/typography'
import { displayFlex } from './mixins/flexbox'

const StackStyles = styled.div`
  margin-bottom: 24px;

  small {
    ${displayFlex('inline-flex')};
    height: 28px;
    padding: 0 10px;
    margin-bottom: 8px;
    font-size: ${FONT_12};
    font-weight: 700;
    color: #fff;
    border-radius: 4px;

    &:not(:last-child) {
      margin-right: 8px;
    }

    &.react {
      background-color: #aac5ee;
    }
    &.styled-components {
      background-color: #eeaaaa;
    }
    &.redux {
      background-color: #aadeee;
    }
  }
`

export default StackStyles
