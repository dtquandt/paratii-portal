import React, { Component } from 'react'
import styled from 'styled-components'

import Button from 'components/foundations/Button'
import TranslatedText from 'components/translations/TranslatedText'

type Props = {}

const Footer = styled.footer`
  align-items: center;
  background-color: ${props => props.theme.colors.footer.background};
  display: flex;
  flex: 0 0 ${props => props.theme.sizes.mainFooter.height};
  justify-content: space-between;
  padding: ${props => props.theme.sizes.mainFooter.padding};

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 55px 40px 50px;
    flex: initial;
  }

  @media (max-width: 767px) {
    text-align: center;
  }
`

const FooterOpenSourceText = styled.p`
  color: ${props => props.theme.colors.footer.color};
  font-size: ${props => props.theme.fonts.footer.text};
  display: block;
`

const FooterOpenSourceText2 = FooterOpenSourceText.extend`
  color: ${props => props.theme.colors.footer.color2};

  @media (max-width: 900px) {
    margin-top: 30px;
  }

  @media (max-width: 767px) {
    padding: 0 40px;
  }
`

const Anchor = Button.withComponent('a')

class MainFooter extends Component<Props, void> {
  render () {
    return (
      <Footer>
        <FooterOpenSourceText>
          <TranslatedText
            message="footer.discover_html"
            options={{
              homePageLink: (
                <Anchor
                  anchor
                  purple
                  href="http://paratii.video/"
                  target="_blank"
                >
                  <TranslatedText message="footer.homePage" />
                </Anchor>
              )
            }}
          />
        </FooterOpenSourceText>
        <FooterOpenSourceText2>
          <TranslatedText
            message="footer.betaTool_html"
            options={{
              telegramBrazilLink: (
                <Anchor
                  anchor
                  href="https://t.me/paratiivideo"
                  target="_blank"
                  underline
                >
                  <TranslatedText message="footer.brazil" />
                </Anchor>
              ),
              telegramEnglishLink: (
                <Anchor
                  anchor
                  href="https://t.me/joinchat/EWZMBQ9mnqJ1--NKHpyF8A"
                  target="_blank"
                  underline
                >
                  <TranslatedText message="footer.english" />
                </Anchor>
              )
            }}
          />
        </FooterOpenSourceText2>
      </Footer>
    )
  }
}

export default MainFooter
