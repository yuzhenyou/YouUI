<template>
	<button class="ya-button" :class="{
		[`ya-button--${type}`]: type,
		[`ya-button--${size}`]: size,
		'is-plain': plain,
		'is-round': round,
		'is-circle': circle,
		'is-disabled': disabled,
	}" :disabled="disabled">
		<span>
			<slot />
		</span>
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
export default defineComponent({
	name: 'YAButoon'
})

</script>

<script setup lang="ts">

// import type { ButtonProps } from './types'
// defineProps<ButtonProps>()

import { buttonProps } from './types'
defineProps(buttonProps)

</script>

<style lang='scss' scoped></style>
