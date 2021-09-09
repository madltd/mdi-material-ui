import * as React from 'react'
import SvgIcon from '@mui/material/SvgIcon'

export default (path) => {
  const Icon = React.memo(
    React.forwardRef((props, ref) => (
      <SvgIcon {...props} ref={ref}>
        <path d={path} />
      </SvgIcon>
    ))
  )
  Icon.muiName = 'SvgIcon'
  return Icon
}
