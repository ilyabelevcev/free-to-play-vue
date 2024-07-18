<template>
	<div class="skeleton-card-list">
		<div v-for="i in [...Array(16).keys()].map(i =&gt; i + 1)" :key="i" class="skeleton-card-item">
			<Skeleton height="155px" class="skeleton-card-image" />
			<Skeleton width="10rem" class="skeleton-card-title"></Skeleton>
			<Skeleton width="8rem" class="skeleton-card-subtitle"></Skeleton>
			<Skeleton class="skeleton-card-content"></Skeleton>
			<div class="skeleton-card-footer">
				<Skeleton
					width="7rem"
					height="1.5rem"
					class="skeleton-card-date"
				></Skeleton>
				<Skeleton
					width="3rem"
					height="1.5rem"
					class="skeleton-card-genre"
				></Skeleton>
				<div class="skeleton-card-platform">
					<Skeleton
						width="1.5rem"
						height="1.5rem"
						class="skeleton-card-platform-span"
					></Skeleton>
					<Skeleton
						width="1.5rem"
						height="1.5rem"
						class="skeleton-card-platform-span"
					></Skeleton>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SkeletonGamesList',
};
</script>

<style lang="scss" scoped>
.skeleton-card-list {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	margin: -0.75%;
	.skeleton-card-item {
		flex: 1 1 23.5%;
		max-width: 23.5%;
		margin: 0.75%;
	}
	.p-skeleton {
		margin-bottom: 1rem;
	}
	.skeleton-card-subtitle {
		margin-bottom: 1.5rem;
	}
	.skeleton-card-content {
		margin-bottom: 1.5rem;
	}
	.skeleton-card-footer {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		.skeleton-card-date {
			margin-right: auto;
		}
		.skeleton-card-platform {
			display: flex;
			align-items: center;
			margin-left: 5%;
			.skeleton-card-platform-span:not(:last-child) {
				margin-right: 0.2rem;
			}
		}
	}
}
</style>
