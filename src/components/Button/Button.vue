<template>
	<button class="ya-button" :class="{
		[`ya-button--${type}`]: type,
		[`ya-button--${size}`]: size,
		'is-plain': plain,
		'is-round': round,
		'is-circle': circle,
		'is-disabled': disabled,
	}" :disabled="disabled" :autofocus="autofocus" :type="nativeType">
		<span>
			<slot />
		</span>
	</button>
</template>


<script setup lang="ts">

import type { ButtonProps } from './types'
defineOptions({
	name: 'YAButton'
})

withDefaults(defineProps<ButtonProps>(), { nativeType: 'button' })

</script>

<style lang='scss' scoped></style>
