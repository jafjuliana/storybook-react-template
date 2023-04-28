export interface ButtonProps {
  disabled?: boolean
  label?: string
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  onClick?: () => void
}
