import { PopoverProps } from './popover'
import { OmitType } from '../components/utils/type'

export interface TooltipProps extends OmitType<PopoverProps, 'content'> {}
