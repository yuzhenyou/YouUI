import type { PropType } from 'vue'
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'large' | 'samll'

export interface ButtonProps {
	type?: ButtonType;
	size?: ButtonSize;
	plain?: Boolean;
	round?: Boolean;
	circle?: Boolean;
	disabled?: Boolean | 'true' | 'false';
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