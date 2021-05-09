import styled from 'styled-components'
import * as colour from './constants/colours'
import * as font from './constants/typography'
import { displayFlex } from './mixins/flexbox'

export const CardStyles = styled.div`
  ${displayFlex()};
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 32px 40px;
  margin-bottom: 80px;
  color: ${(props) => props.theme.textColour};
  border-radius: 8px;
  background-color: ${(props) => props.theme.cardColour};
`

export const TitleGroup = styled.div`
  ${displayFlex('flex', 'space-between')};
  width: 100%;
  margin-bottom: 32px;

  .title {
    font-size: ${font.FONT_24};
    font-weight: 700;
    color: ${colour.BLUE};
  }

  .link-item:not(:last-child) {
    margin-right: 12px;
  }
`

export const ContentGroup = styled.div`
  ${displayFlex('flex', 'space-between', 'stretch')};
  flex-wrap: wrap;
  width: 100%;

  .content-right {
    flex: 1;
    min-width: 300px;
  }

  .demo-gif {
    display: block;
    width: 45%;
    height: 100%;
    margin-right: 36px;
    background-color: #fff;
  }

  .description-list {
    width: 100%;
  }

  .description-item {
    margin-bottom: 12px;
    font-size: ${font.FONT_18};
    line-height: 1.5;
    /* word-wrap: break-word; */
  }
`
