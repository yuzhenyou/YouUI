<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Button from './components/Button/Button.vue'
import type { ButtonInstance } from './components/Button/types'
const buttonRef = ref<ButtonInstance | null>(null)
onMounted(() => {
  if (buttonRef.value) {
    console.log("buttonRef:", buttonRef.value.ref)
  }
})
</script>

<template>
  <main>
    <h1>Button 按钮</h1>
    <hr />
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br /><br />
    <Button plain>Plain</Button>
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br /><br />
    <Button round>Round</Button>
    <Button type="primary" round>Primary</Button>
    <Button type="success" round>Success</Button>
    <Button type="info" round>Info</Button>
    <Button type="warning" round>Warning</Button>
    <Button type="danger" round>Danger</Button><br /><br />
  </main>
</template>

<style scoped>
.font-primary {
  font-weight: var(--ya-font-weight-primary);
  color: var(--ya-text-color-primary);
}
</style>
