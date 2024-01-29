import type { PropType } from 'vue'
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'large' | 'samll'
export type NativeType = 'button' | 'reset' | 'submit'

export interface ButtonProps {
	type?: ButtonType;
	size?: ButtonSize;
	plain?: boolean;
	round?: boolean;
	circle?: boolean;
	disabled?: boolean;
	nativeType?: NativeType;
	autofocus?: boolean;
}
export const buttonProps = {
	type: {
		type: String as PropType<ButtonType>
	},
	size: {
		type: String as PropType<ButtonSize>
	},
	plain: {
		type: Boolean
	},
	round: {
		type: Boolean
	},
	circle: {
		type: Boolean
	},
	disabled: {
		type: Boolean
	}
}