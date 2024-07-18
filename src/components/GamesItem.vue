
<template>
	<Card v-if="game" @click="() => $router.push(`/games/${game.id}`)" class="games-item" style="overflow: hidden" :id="game.id">
		<template #header>
			<img class="card-image" :src="game.thumbnail" />
		</template>
		<template #title>
			<div class="card-title">{{ game.title }}</div>
		</template>
		<template #subtitle>
			<div class="card-subtitle">{{ game.publisher }}</div>
		</template>
		<template #content>
			<div class="card-content">{{ game.short_description }}</div>
		</template>
		<template #footer>
			<div class="card-footer">
				<div class="card-date">
					{{ game.release_date.split('-')[2] }}.{{
						game.release_date.split('-')[1]
					}}.{{ game.release_date.split('-')[0] }}
				</div>
				<div class="card-genre">
					<span class="card-genre-content">{{ game.genre }}</span>
				</div>
				<div
					v-if="game.platform != 'PC (Windows), Web Browser'"
					class="card-platform"
				>
					<span
						v-if="game.platform == 'Web Browser'"
						class="pi pi-globe"
					></span>
					<span
						v-if="game.platform == 'PC (Windows)'"
						class="pi pi-microsoft"
					></span>
				</div>
				<div v-else class="card-platform">
					<span class="pi pi-globe"></span>
					<span class="pi pi-microsoft"></span>
				</div>
			</div>
		</template>
	</Card>
</template>

<script>
export default {
	name: 'GamesItem',
	props: {
		game: {
			type: Object,
			required: true
		},
	},
	data() {
		return {};
	},
	methods: {},
	mounted() {}
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main';
.games-item {
	flex: 1 1 23.5%;
	max-width: 23.5%;
	margin: 0.75%;
  cursor: pointer;
  transition: $transition;
  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    transform: scale(1.03);
  }
	.card-image {
		width: 100%;
		height: 100%;
	}
	.card-title {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.card-subtitle {
	}
	.card-content {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.card-footer {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		.card-date {
			margin-right: auto;
		}
		.card-genre {
			display: flex;
			align-items: center;
			color: #1e1e1e;
			background-color: rgba(255, 255, 255, 0.87);
			font-size: 0.7rem;
			padding: 0.15rem 0.3rem;
			border-radius: 0.5rem;
		}
		.card-platform {
			display: flex;
			align-items: center;
			margin-left: 5%;
			span:not(:last-child) {
				margin-right: 0.2rem;
			}
		}
	}
}
</style>
