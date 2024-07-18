<template>
	<div class="games-wrapper">
		<div v-if="!games.length">Не найдено никаких игр</div>
		<div class="games-list">
			<GamesItem v-for="(game, index) in games" :key="index" :game="game" />
		</div>
	</div>
</template>

<script>
import GamesItem from '@/components/GamesItem.vue';

export default {
	name: 'GamesList',
	components: {
		GamesItem
	},
	props: {
		games: {
			type: Array,
			required: true
		}
	},
	data() {
		return {};
	},
	methods: {},
	mounted() {}
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
	transition: 0.15s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
	transform: scale(0);
}
.games-wrapper {
	.games-list {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin: -0.75%;
	}
}
</style>
