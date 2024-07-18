<template>
	<div class="games">
		<h2 class="title">Top Free Games for PC and Browser In 2024!</h2>
		<div class="filters">
			<InputGroup class="filter-select">
				<InputGroupAddon> Platforms: </InputGroupAddon>
				<Dropdown
					v-model="selectedPlatform"
					:options="filters.platforms"
					optionLabel="name"
					placeholder="Select a Platform"
					@change="getGames"
				/>
			</InputGroup>

			<InputGroup class="filter-select">
				<InputGroupAddon> Genre/Tag: </InputGroupAddon>
				<Dropdown
					v-model="selectedTag"
					:options="filters.tags"
					optionLabel="name"
					placeholder="Select a Tag/Genre"
					@change="getGames"
				/>
			</InputGroup>

			<InputGroup class="filter-select">
				<InputGroupAddon> Sort By: </InputGroupAddon>
				<Dropdown
					v-model="selectedSortBy"
					:options="filters.sortBy"
					optionLabel="name"
					placeholder="Sort By"
					@change="getGames"
				/>
			</InputGroup>
		</div>
		<transition name="fade">
      <SkeletonGamesList v-if="loading" />
      <GamesList :games="games" v-else />
		</transition>
	</div>
</template>

<script>
import { getAllGames } from '@/api/getGames.js';
import SkeletonGamesList from '@/components/SkeletonGamesList.vue';
import GamesList from '@/components/GamesList.vue';
export default {
	name: 'GamesView',
	components: {
		SkeletonGamesList,
		GamesList
	},
	data() {
		return {
			games: [],
			selectedPlatform: { name: 'All Platforms', slug: 'all' },
			selectedTag: { name: 'All', slug: null },
			selectedSortBy: { name: 'Relevance', slug: 'relevance' },
			filters: {
				platforms: [
					{ name: 'All Platforms', slug: 'all' },
					{ name: 'Windows (PC)', slug: 'pc' },
					{ name: 'Browser (Web)', slug: 'browser' }
				],
				tags: [
					// Category
					{ name: 'All', slug: null },
					{ name: 'MMO', slug: 'mmo' },
					{ name: 'MMORPG', slug: 'mmorpg' },
					{ name: 'Shooter', slug: 'shooter' },
					{ name: 'Strategy', slug: 'strategy' },
					{ name: 'Moba', slug: 'moba' },
					{ name: 'Card Games', slug: 'card' },
					{ name: 'Racing', slug: 'racing' },
					{ name: 'Sports', slug: 'sports' },
					{ name: 'Social', slug: 'social' },
					{ name: 'Fighting', slug: 'fighting' }
					// Tag
					// { name: 'sandbox' },
					// { name: 'open-world' },
					// { name: 'survival' },
					// { name: 'pvp' },
					// { name: 'pve' },
					// { name: 'pixel' },
					// { name: 'voxel' },
					// { name: 'zombie' },
					// { name: 'turn-based' },
					// { name: 'first-person' },
					// { name: 'third-Person' },
					// { name: 'top-down' },
					// { name: 'tank' },
					// { name: 'space' },
					// { name: 'sailing' },
					// { name: 'side-scroller' },
					// { name: 'superhero' },
					// { name: 'permadeath' },
					// { name: 'battle-royale' },
					// { name: 'mmofps' },
					// { name: 'mmotps' },
					// { name: '3d' },
					// { name: '2d' },
					// { name: 'anime' },
					// { name: 'fantasy' },
					// { name: 'sci-fi' },
					// { name: 'action-rpg' },
					// { name: 'action' },
					// { name: 'military' },
					// { name: 'martial-arts' },
					// { name: 'flight' },
					// { name: 'low-spec' },
					// { name: 'tower-defense' },
					// { name: 'horror' },
					// { name: 'mmorts' }
				],
				sortBy: [
					{ name: 'Relevance', slug: 'relevance' },
					{ name: 'Popularity', slug: 'popularity' },
					{ name: 'Release Date', slug: 'release-date' },
					{ name: 'Alphabetical', slug: 'alphabetical' }
				]
			},
			loading: true
		};
	},
	methods: {
		async getGames() {
			this.loading = true;
			try {
				const response = await getAllGames(
					this.selectedPlatform.slug,
					this.selectedTag.slug,
					this.selectedSortBy.slug
				);

				if (response.status == 200) {
					this.games = response.data;
				}
			} catch (e) {
				console.log(e.message);
			} finally {
				this.loading = false;
			}
		}
	},
	mounted() {
		this.getGames();
	}
};
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .15s
}
.fade-enter-to, .fade-leave-to {
  opacity: 0
}
.games {
	padding: 1.5rem 0;
	.title {
		margin: 0;
	}
	.filters {
		width: 100%;
		margin: 2rem 0;
		display: flex;
		align-items: center;
		.filter-select {
			width: 16rem;
			&:not(:last-child) {
				margin-right: 2rem;
			}
		}
	}
}
</style>
