import styled from '@emotion/styled'
import { FC, ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'text' | 'outlined' | 'contained'
  size?: 'small' | 'medium' | 'large'
  color?: 'purple' | 'blue' | 'orange'
  fullWidth?: boolean
}

export const RButton: FC<IProps> = (props) => {
  const { variant, size, color, className, children, fullWidth = false } = props;
  return (
    <StyledWrapper>
      <StyledButton
        {...props}
        className={classNames(`r-button r-button__${size || 'medium'} r-button__${variant || 'contained'} r-button__${color || 'primary'} ${fullWidth && 'fullWidth'} ${className && className}`)}
      >
        {children}
      </StyledButton>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
`

const StyledButton = styled.button`
  color: $white;
  text-transform: uppercase;
  border: none;
  background: #736AE4;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    &.r-button__contained {
      background: $purple !important;
    }

    &.r-button__outlined {
      background: transparent;
      border-color: $white;
      color: $white;
    }

    &:hover {
      cursor: default;
    }
  }

  &__orange {
    &.r-button__contained {
      background: #BBE82C;

      &:hover {
        background: #EAFC21;
      }

      &:active {
        background: #7F9D1E;
      }
    }

    &.r-button__outlined {
      background: transparent;
      border: 3px solid white;
      color: white;
    }
  }

  &__blue {
    &.r-button__contained {
      background: $blue;

      &:hover {
        background: $blue;
      }

      &:active {
        background: #7F9D1E;
      }
    }

    &.r-button__outlined {
      background: transparent;
      border: 3px solid $white;
      color: $white;
    }
  }

  &__large {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    padding: 28px 56px !important;
    font-size: 22px;
  }

  &__medium {
    min-width: 224px;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 100%;
    text-transform: uppercase;
    padding: 5.5px 47px !important;

  &__fullWidth {
    width: 100%;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    text-transform: capitalize;

`
