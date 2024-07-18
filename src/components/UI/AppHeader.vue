<template>
	<header class="header">
		<div class="app-container">
			<nav class="header-nav">
				<router-link class="header-nav-logo" to="/">
					<img
						src="https://www.freetogame.com/assets/images/freetogame-logo.png"
						alt=""
					/>
				</router-link>
				<router-link class="header-nav-link" to="/">Home</router-link>
				<router-link class="header-nav-link" to="/games"
					>Free Games</router-link
				>
			</nav>
		</div>
	</header>
</template>

<script>
export default {
	name: 'AppHeader'
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main';
.header {
	width: 100%;
	padding: 1rem 0;
	.header-nav {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		&-logo {
			margin-right: 2rem;
		}
		&-link {
			color: $textColor;
			text-decoration: none;
			font-size: 1rem;
			padding-bottom: 0.2rem;
			border-bottom: 1px solid transparent;
			transition: $transition;
			&:not(:last-child) {
				margin-right: 2rem;
			}
			&.router-link-active,
			&:hover {
				color: $textHoverColor;
				border-color: $textHoverColor;
			}
		}
	}
}
</style>
