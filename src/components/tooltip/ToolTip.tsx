import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '@stitches/react'

import { IconButton, TooltipIcon, TooltipContent, TooltipArrow } from '@/styles/tooltip.stitches'
export interface ToolTipProps {
  content: string
}

const ToolTip = ({ content }: ToolTipProps) => {
  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root>
        <Tooltip.Trigger>
          <IconButton>
            <TooltipIcon>&#9432;</TooltipIcon>
          </IconButton>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <CustomTooltipContent>
            {content}
            <CustomTooltipArrow />
          </CustomTooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

const CustomTooltipContent = styled(Tooltip.Content, {
  ...TooltipContent,
})

const CustomTooltipArrow = styled(Tooltip.Arrow, {
  ...TooltipArrow,
})

export default ToolTip
