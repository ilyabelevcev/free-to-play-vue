<template>
	<div class="game-wrapper">
		<div class="go-back" @click="() => $router.go(-1)">
			<span class="pi pi-arrow-left"></span>
      <span>назад к списку игр</span>
		</div>
		<div v-if="loading">Loading...</div>
		<GameItem v-else :error="error" :game="game" />
	</div>
</template>

<script>
import { getCurrentGame } from '@/api/getGames.js';
import GameItem from '@/components/GameItem.vue';
export default {
	name: 'HomeView',
	components: {
		GameItem
	},
	data() {
		return {
			game: null,
			error: '',
			loading: false
		};
	},
	methods: {
		async getGame() {
			this.loading = true;
			try {
				const response = await getCurrentGame(this.$route.params.id);

				if (response.status == 200) {
					this.game = response.data;
				}
			} catch (e) {
				this.error = e.message;
			} finally {
				this.loading = false;
			}
		}
	},
	mounted() {
		this.getGame();
	}
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main';
.game-wrapper {
	.go-back {
		cursor: pointer;
		display: inline-flex;
		align-items: center;
    color: $semiVisibleColor;
    span {
      transition: $transition;
    }
		.pi {
			display: block;
			margin-right: 0.5rem;
			font-size: 0.7rem;
			transition: $transition;
		}
		&:hover {
			span {
        color: $textHoverColor;
      }
			.pi {
				transform: translateX(-0.5rem);
			}
		}
	}
}
</style>
