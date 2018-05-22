import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { ButtonColor } from './foundations/Button'
import SVGIcon from './foundations/SVGIcon'
import Title from './foundations/Title'
import Text, { Strong } from './foundations/Text'
import Card, { CardStyle } from './structures/Card'

type Props = {}

const INFOSTATUS_CARD_MARGIN_BOTTOM: string = '15px'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1285px;
  width: 100%;
`

const VideoWrapper = styled.div`
  display: flex;
  flex: 1 1 840px;
  flex-direction: column;
  margin-right: 20px;
`

const PlayInfo = styled(Card)`
  width: 100%;
`

const InfoWrapper = styled.div`
  display: flex;
  flex: 1 1 410px;
  flex-direction: column;
`

const InfoStatus = styled.div`
  ${CardStyle} margin-bottom: ${INFOSTATUS_CARD_MARGIN_BOTTOM};
`

const InfoStatusTitle = styled(Text)`
  display: flex;
  align-items: center;
`

const InfoStatusContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 20px;
`

const InfoStatusButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${ButtonColor} {
    flex: 0 0 49%;
  }
`

const Voting = styled.div`
  display: flex;
  flex-direction: column;
`

const VotingValuesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const VotingValue = styled.div`
  align-content: center;
  background-color: ${props => props.theme.colors.UserNav.UserPTIValueBox};
  display: flex;
  flex: 0 0 48.5%;
  flex-direction: column;
  justify-items: center;
  padding: 24px 14px 14px;
  text-align: center;
`

const VotingBarWrapper = styled.div`
  border-radius: 2px;
  display: flex;
  height: 4px;
  margin: 25px 0;
`

const VotingBar = styled.div`
  background: ${props =>
    props.red
      ? props.theme.colors.ProfileCuration.VotingBarTwo
      : props.theme.colors.ProfileCuration.VotingBarOne};
  flex: 1 1 ${props => props.percentage};
  height: 100%;
  text-align: center;
`

const ChallengePeriod = styled.div`
  align-items: center;
  background: linear-gradient(
    135deg,
    ${props =>
    props.inReveal
      ? props.theme.colors.ProfileCuration.ChallengeBackgroundTwoFrom
      : props.theme.colors.ProfileCuration.ChallengeBackgroundOneFrom}
      0%,
    ${props =>
    props.inReveal
      ? props.theme.colors.ProfileCuration.ChallengeBackgroundTwoTo
      : props.theme.colors.ProfileCuration.ChallengeBackgroundOneTo}
      100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${INFOSTATUS_CARD_MARGIN_BOTTOM};
  padding: 50px 25px 60px;
`

const ChallengeTimeWrapper = styled.div`
  margin: 35px 0;
  text-align: center;
  width: 100%;
`

const ChallengeTime = styled.div`
  display: inline-flex;
  flex-direction: column;
  text-align: center;
  vertical-align: bottom;
  width: 16%;
`

const ChallengeSequence = styled(ChallengeTimeWrapper)`
  margin: 0;
`

const ChallengeSequenceText = styled(Text)`
  display: inline-block;
  text-align: center;
  width: 33.2%;
`

const ChallengeTimeline = styled(ChallengeTimeWrapper)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 20px 0 0;
  position: relative;
  width: 70%;
`

const ChallengeLine = styled.span`
  border-top: 2px ${({ dashed }) => (dashed ? 'dashed' : 'solid')}
    ${props => props.theme.colors.ProfileCuration.ChallengeSequenceDot};
  left: 0;
  opacity: ${({ dashed }) => (dashed ? 0.5 : null)};
  opacity: ${({ dashed }) => (dashed ? 0.5 : null)};
  position: absolute;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  width: ${({ width }) => width || '100%'};
`

const ChallengeSequenceDot = styled.span`
  background: ${props =>
    props.theme.colors.ProfileCuration.ChallengeSequenceDot};
  border-radius: 100%;
  height: ${props => (props.active ? '12px' : '8px')};
  position: relative;
  width: ${props => (props.active ? '12px' : '8px')};
  z-index: 2;

  ${props =>
    props.active
      ? css`
          &:before,
          &:after {
            content: '';
          }
        `
      : null} &:before, &:after {
    border: 2px solid
      ${props => props.theme.colors.ProfileCuration.ChallengeSequenceDot};
    border-radius: 100%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }

  &:before {
    height: 22px;
    opacity: 0.5;
    width: 22px;
  }

  &:after {
    height: 36px;
    opacity: 0.2;
    width: 36px;
  }
`

class Profile extends Component<Props, void> {
  render () {
    return (
      <Wrapper>
        <VideoWrapper>
          <Text>Video</Text>
          <PlayInfo>
            <Title small>Video title</Title>
          </PlayInfo>
        </VideoWrapper>
        <InfoWrapper>
          <ChallengePeriod inReveal>
            <Text big>
              <Strong>challenged period</Strong> ends in
            </Text>
            <ChallengeTimeWrapper>
              <ChallengeTime>
                <Text tiny>hours</Text>
                <Title bigger bold>
                  19
                </Title>
              </ChallengeTime>
              <ChallengeTime>
                <Title bigger bold>
                  :
                </Title>
              </ChallengeTime>
              <ChallengeTime>
                <Text tiny>minutes</Text>
                <Title bigger bold>
                  20
                </Title>
              </ChallengeTime>
              <ChallengeTime>
                <Title bigger bold>
                  :
                </Title>
              </ChallengeTime>
              <ChallengeTime>
                <Text tiny>seconds</Text>
                <Title bigger bold>
                  47
                </Title>
              </ChallengeTime>
            </ChallengeTimeWrapper>

            <ChallengeSequence>
              <ChallengeSequenceText disabled>
                whitelisted
              </ChallengeSequenceText>
              <ChallengeSequenceText bold>challenged</ChallengeSequenceText>
              <ChallengeSequenceText disabled>in reveal</ChallengeSequenceText>
            </ChallengeSequence>

            <ChallengeTimeline>
              <ChallengeSequenceDot />
              <ChallengeSequenceDot active />
              <ChallengeSequenceDot future />

              <ChallengeLine dashed />
              <ChallengeLine width="50%" />
            </ChallengeTimeline>
          </ChallengePeriod>

          <InfoStatus>
            <InfoStatusContent>
              <InfoStatusTitle big>
                This video is <Strong>Whitelisted</Strong>
              </InfoStatusTitle>
            </InfoStatusContent>
            <InfoStatusContent>
              <Text gray>
                This video has been published in our network. If it has anything
                that goes against our policy challenge it and you’ll be rewarded
              </Text>
            </InfoStatusContent>
            <ButtonColor>Challenge this content</ButtonColor>
          </InfoStatus>

          <InfoStatus>
            <InfoStatusContent>
              <InfoStatusTitle>Committ your vote</InfoStatusTitle>
            </InfoStatusContent>
            <InfoStatusContent>
              <Text gray>
                This video has been published in our network. If it has anything
                that goes against our policy challenge it and you’ll be rewarded
              </Text>
            </InfoStatusContent>
            <InfoStatusContent>
              <InfoStatusTitle>Choose wise</InfoStatusTitle>
            </InfoStatusContent>
            <InfoStatusButtons>
              <ButtonColor green>Support</ButtonColor>
              <ButtonColor pink>Oppose</ButtonColor>
            </InfoStatusButtons>
          </InfoStatus>

          <InfoStatus>
            <InfoStatusContent>
              <InfoStatusTitle>
                <SVGIcon
                  color="white"
                  icon="icon-check"
                  height="18px"
                  width="18px"
                  margin="0 10px 0 0"
                />
                Vote committed
              </InfoStatusTitle>
            </InfoStatusContent>
            <Text gray>
              Wait until the committ period ends to reveal it.You will send it{' '}
              <Strong purple>back</Strong> when the reveal period starts. If you
              don’t send it back your vote is not going to be counted.
            </Text>
          </InfoStatus>

          <InfoStatus>
            <InfoStatusContent>
              <InfoStatusTitle>
                <SVGIcon
                  color="pink"
                  icon="icon-alert"
                  height="18px"
                  width="18px"
                  margin="0 10px 0 0"
                />
                You need to send back your vote!!
              </InfoStatusTitle>
            </InfoStatusContent>
            <InfoStatusContent>
              <Text gray>
                Wait until the committ period ends to reveal it.You will send it{' '}
                <Strong purple>back</Strong> when the reveal period starts. If
                you don’t send it back your vote is not going to be counted.
              </Text>
            </InfoStatusContent>
            <ButtonColor>Send back your vote</ButtonColor>
          </InfoStatus>

          <InfoStatus>
            <InfoStatusContent>
              <InfoStatusTitle>
                <SVGIcon
                  color="green"
                  icon="icon-check"
                  height="18px"
                  width="18px"
                  margin="0 10px 0 0"
                />
                This video has been approved
              </InfoStatusTitle>
            </InfoStatusContent>
            <Text gray>
              The Paratii community supported the permanence of this video on
              the platform. The video will continue to exist on the plataform
              and is going to be available for new challenges in 6 days
            </Text>
          </InfoStatus>

          <InfoStatus>
            <InfoStatusContent>
              <InfoStatusTitle>Voting</InfoStatusTitle>
            </InfoStatusContent>
            <Voting>
              <VotingValuesWrapper>
                <VotingValue>
                  <Text textTransform="uppercase" small green>
                    Support
                  </Text>
                  <Title big bold gray>
                    65%
                  </Title>
                </VotingValue>
                <VotingValue>
                  <Text textTransform="uppercase" small pink>
                    Oppose
                  </Text>
                  <Title big bold gray>
                    35%
                  </Title>
                </VotingValue>
              </VotingValuesWrapper>
              <VotingBarWrapper>
                <VotingBar percentage="65%" />
                <VotingBar red percentage="35%" />
              </VotingBarWrapper>
            </Voting>
            <Text small gray>
              Date of the challenge: 04/03/2018
            </Text>
          </InfoStatus>

          <InfoStatus>
            <InfoStatusContent>
              <InfoStatusTitle>
                <SVGIcon
                  color="pink"
                  icon="icon-close"
                  height="18px"
                  width="18px"
                  margin="0 10px 0 0"
                />
                This video has been rejected
              </InfoStatusTitle>
            </InfoStatusContent>
            <Text gray>
              The Paratii community opposed the permanence of this video on the
              platform. The video was deleted because most of our trustees
              believe that this video broke one of our policies
            </Text>
          </InfoStatus>
        </InfoWrapper>
      </Wrapper>
    )
  }
}

export default Profile
