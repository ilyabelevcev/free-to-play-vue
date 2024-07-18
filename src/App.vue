<template>
	<div class="app-wrapper">
    <AppHeader />
		<div class="app-container">
      <router-view />
    </div>
	</div>
</template>

<script>
export default {
  name: 'App',
  component: {
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main';
@import 'primeicons/primeicons.css';
@import 'primevue/resources/themes/mdc-dark-indigo/theme.css';
.app-container {
	max-width: 1180px;
	padding: 0 10px;
	margin: 0 auto;
}
</style>
