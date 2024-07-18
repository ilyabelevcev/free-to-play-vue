<template>
	<div class="game-container">
		<div v-if="!game" class="game error">Ошибка: {{ error }}</div>
		<div v-else class="game ok">
			<div class="left">
				<div class="game-image">
					<img :src="game.thumbnail" alt="" />
				</div>
			</div>
			<div class="right">
				<Breadcrumb class="game-breadcrumb" :model="items">
					<template #item="{ item, props }">
						<router-link
							v-if="item.route"
							v-slot="{ href, navigate }"
							:to="item.route"
							custom
						>
							<a :href="href" v-bind="props.action" @click="navigate">
								<span :class="[item.icon, 'text-color']" />
								<span class="text-primary font-semibold">{{ item.label }}</span>
							</a>
						</router-link>
						<a
							v-else
							:href="item.url"
							:target="item.target"
							v-bind="props.action"
						>
							<span class="text-color">{{ item.label }}</span>
						</a>
					</template>
					<template #separator>
						<span class="separator pi pi-chevron-right"></span>
					</template>
				</Breadcrumb>

				<h3 class="game-title">{{ game.title }}</h3>
				<div class="game-about">
					<span>{{ game.description }}</span>
				</div>
				<div class="game-additional-info">
					<h4>Additional Information</h4>
					<div class="game-additional-info-list">
						<span>
							<span class="label">Title</span>
							{{ game.title }}
						</span>
						<span>
							<span class="label">Developer</span>
							{{ game.developer }}
						</span>
						<span>
							<span class="label">Publisher</span>
							{{ game.publisher }}
						</span>
						<span>
							<span class="label">Release Date</span>
							{{ game.release_date }}
						</span>
						<span>
							<span class="label">Genre</span>
							{{ game.genre }}
						</span>
						<span>
							<span class="label">Platform</span>
							{{ game.platform }}
						</span>
					</div>
				</div>
				<div class="game-screenshots">
					<h4>{{ game.title }} Screenshots</h4>
					<div>{{ game.screenshots }}</div>
				</div>
				<div class="game-requirements">
					<h4>Minimum System Requirements (Windows)</h4>
					<div>{{ game.minimum_system_requirements }}</div>
				</div>

				<!-- <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> -->
				<!-- {{ game }} -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'GameItem',
	props: {
		game: {
			type: null,
			required: true
		},
		error: {
			type: String,
			required: false
		}
	},
	data() {
		return {
			items: [
				{ label: 'Home', route: '/' },
				{ label: 'Games', route: '/games' },
				{ label: this.game?.title }
			]
		};
	},
	methods: {},
	mounted() {
		console.log(this.game);
	}
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main';
.game-container {
	.game {
		color: $textColor;
		&.error {
			width: 100%;
			text-align: center;
			padding-top: 1.5rem;
		}
		&.ok {
			display: flex;
			align-items: stretch;
			justify-content: space-between;
		}
		.left {
			min-height: 100%;
			width: 40%;
		}
		.right {
			padding: 1.5rem 0 0 0.7rem;
			width: 60%;
			font-size: 0.85rem;
		}
		h4 {
			font-size: 1.5rem;
			padding-bottom: 0.3rem;
			margin-bottom: 1rem;
			border-bottom: 2px solid var(--bluegray-800);
		}
		&-image {
			padding: 1.5rem 0.7rem 0 0;
			position: sticky;
			top: 0px;
			img {
				width: 100%;
			}
		}
		&-breadcrumb {
			display: inline-block;
			border: 0;
			padding: 0;
			background-color: transparent;
			font-size: 0.7rem;
			margin-bottom: 0.5rem;
			li a {
				padding: 0;
				transition: $transition;
			}
			li:last-child a {
				color: $semiVisibleColor;
			}
			a:hover,
			a:active,
			a:focus {
				color: $textHoverColor;
				background-color: transparent;
			}
			.separator {
				font-size: 0.5rem;
			}
		}
		&-title {
			font-size: 1.5rem;
			margin: 1rem 0;
			line-height: 1;
		}
		&-about {
			margin: 1rem 0;
      line-height: 1.5;
		}
		&-additional-info {
			margin: 3rem 0;
			.game-additional-info-list {
				display: flex;
				flex-wrap: wrap;
				margin: -0.5%;
				span:not(.label) {
					display: flex;
					flex-direction: column;
					margin: 0.5%;
					flex: 1 1 32%;
					max-width: 32%;
				}
				.label {
					margin-bottom: 0.5rem;
					color: $semiVisibleColor;
				}
			}
		}
		&-screenshots {
			margin: 3rem 0;
		}
		&-requirements {
			margin: 3rem 0;
		}
	}
}
</style>
