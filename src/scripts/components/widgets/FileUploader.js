/* @flow */
import React, { Component, Fragment } from 'react'
import styled, { css } from 'styled-components'
import FilesUploaderSvg from '../foundations/svgs/FilesUploaderSvg'
import TextField from '../widgets/forms/TextField'
import Card, { CardTitle } from 'components/structures/Card'
import { SUPPORTED_FILE_TYPES } from 'constants/UploaderConstants'

type Props = {
  isWalletSecured: boolean,
  onError: boolean,
  showCard: boolean,
  margin: string,
  onFileChosen: (file: Object) => void,
  checkUserWallet: () => void
}
const StyleInput = css`
  height: 100%;
  width: 100%;
`

const Title = CardTitle.extend`
  padding: 40px 42px;
`

const InputFile = styled.input.attrs({
  type: 'file',
  accept: SUPPORTED_FILE_TYPES.join(' ')
})`
  ${StyleInput} cursor: pointer;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 3;
`

const UploadCover = styled.div`
  ${StyleInput} background: 0;
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;
  position: relative;
  transition: background ${props => props.theme.animation.time.repaint} 0.2s;
  z-index: 1;

  .dragenter & {
    background-color: ${props => props.theme.colors.FilesUploader.drag.enter};
    transition-delay: 0.16s;
  }
`

const UploadCoverIcon = styled.div`
  margin: 30px 0 20px;
  width: 100%;
`

const SupportedFileTypes = styled.p`
  color: ${({ theme }) => theme.colors.FilesUploader.supportedFileTypes.color};
  font-size: ${props => props.theme.fonts.text.small};
`

const Icon = styled.div`
  height: 110px;
  margin: 0 auto;
  transition: transform 0.5s ${props => props.theme.animation.ease.smooth};
  width: 190px;

  .dragenter & {
    transform: scale(0.95);
  }
`

const UploadCoverText = styled.p`
  color: ${props => props.theme.colors.FilesUploader.drag.color};
  font-size: ${props => props.theme.fonts.text.small};
  text-align: center;
`

const UploadCoverTextBig = styled.span`
  display: block;
  font-size: ${props => props.theme.fonts.text.big};
  margin-bottom: 15px;
`

const FooterWrapper = styled.div`
  width: 100%;
`

const InputText = styled(TextField)`
  margin: 0 0 30px;
`

const UploaderWrapper = styled.div`
  width: 100%;
  position: relative;
`

class FilesUploader extends Component<Props, Object> {
  onFileChosen: (e: Object) => void
  onDrag: (e: Object) => void

  constructor (props: Props) {
    super(props)

    this.state = {
      dragClass: '',
      fileName: 'No file chosen',
      inputTextError: false
    }
  }

  setSelectedFile (file: File) {
    this.props.onFileChosen(file)
    this.setState({
      file: file,
      fileName: file.name + ' | ' + file.size + 'bytes'
    })
  }

  onFileChosen = (e: Object) => {
    const file = e.target.files[0]

    // If wallet not secure open the modal
    if (this.props.isWalletSecured) {
      this.setSelectedFile(file)
    } else {
      this.props.checkUserWallet({
        onClose: () => {
          console.log('wowie')
        }
      })
    }
  }

  onDrag = (e: Object) => {
    // If wallet not secure open the modal
    if (this.props.isWalletSecured) {
      const status = e.type
      let klass = ''
      if (status === 'dragenter' || status === 'mouseover') {
        klass = 'dragenter'
      } else if (status === 'drop') {
        klass = 'drop'
      } else {
        klass = ''
      }
      this.setState({
        dragClass: klass
      })
    } else {
      this.props.checkUserWallet()
    }
  }

  renderUploadTrigger ({ card }: { card: boolean } = {}) {
    const { isWalletSecured } = this.props

    return (
      <Fragment>
        <InputFile
          data-test-id="upload-file-input"
          disabled={!isWalletSecured}
          onChange={this.onFileChosen}
          onDragEnd={this.onDrag}
        />
        <UploadCover>
          {card && <Title>Upload video</Title>}
          <UploadCoverIcon>
            {card && (
              <Icon>
                <FilesUploaderSvg />
              </Icon>
            )}
          </UploadCoverIcon>
          <UploadCoverText>
            <UploadCoverTextBig>Drag & drop to upload</UploadCoverTextBig>{' '}
            <p>or choose a file</p>
            <SupportedFileTypes>
              {' '}
              (only .mp4 currently supported)
            </SupportedFileTypes>
          </UploadCoverText>
        </UploadCover>
      </Fragment>
    )
  }

  render () {
    const { showCard } = this.props
    return showCard ? (
      <Card
        {...this.props}
        nopadding
        className={this.state.dragClass}
        footer={
          <FooterWrapper>
            <InputText
              label="(Not working yet) Or upload from Youtube or Vimeo"
              helper="i.e.: http://youtube.com/videoID or http://vimeo.com/videoID"
              error={this.state.inputTextError}
              disabled
            />
          </FooterWrapper>
        }
      >
        {this.renderUploadTrigger({ card: true })}
      </Card>
    ) : (
      <UploaderWrapper>{this.renderUploadTrigger()}</UploaderWrapper>
    )
  }
}

export default FilesUploader