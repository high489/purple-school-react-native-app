import { Link, LinkProps } from 'expo-router'

import { StyledText } from '../styled-text'
import styles from './styled-link.styles'

type StyledLinkProps = LinkProps & {
  label: string
}

export function StyledLink({ label, ...props }: StyledLinkProps) {
  return (
    <Link {...props}>
      <StyledText style={styles.linkText} variant='subtitle'>
        {label}
      </StyledText>
    </Link>
  )
}
