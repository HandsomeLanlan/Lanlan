<script lang="ts">
	import type { StudyItem } from "@/types/studyPlan";

	interface Props {
		item: StudyItem;
	}

	const { item }: Props = $props();

	const STATUS_CONFIG: Record<string, { color: string; text: string }> = {
		planned: { color: "bg-blue-500", text: "计划中" },
		in_progress: { color: "bg-yellow-500", text: "进行中" },
		completed: { color: "bg-green-500", text: "已完成" },
	};

	const statusCfg = $derived(STATUS_CONFIG[item.status] || STATUS_CONFIG.planned);
	const tags = $derived(item.tags || []);
	const visibleTags = $derived(tags.slice(0, 4));
	const hiddenTagCount = $derived(Math.max(tags.length - visibleTags.length, 0));
</script>

{#if item.link}
	<a
		href={item.link}
		class="group relative overflow-hidden rounded-xl border border-(--line-divider) bg-white dark:bg-neutral-900 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] block p-5"
	>
		<CardContent />
	</a>
{:else}
	<div
		class="group relative overflow-hidden rounded-xl border border-(--line-divider) bg-white dark:bg-neutral-900 transition-all duration-300 hover:shadow-lg p-5"
	>
		<CardContent />
	</div>
{/if}

{#snippet CardContent()}
	<div class="flex items-start justify-between mb-3">
		<span class="px-2.5 py-1 rounded-full text-xs text-white font-medium {statusCfg.color}">
			{statusCfg.text}
		</span>
		{#if item.date}
			<span class="text-xs text-neutral-400">{item.date}</span>
		{/if}
	</div>

	<h3 class="font-bold text-sm text-neutral-900 dark:text-neutral-100 mb-1.5 line-clamp-2">
		{item.title}
	</h3>

	{#if item.description}
		<p class="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 mb-3 leading-relaxed">
			{item.description}
		</p>
	{/if}

	{#if visibleTags.length > 0}
		<div class="flex flex-wrap gap-1 mt-auto">
			{#each visibleTags as tag}
				<span class="text-[0.6rem] px-2 py-0.5 rounded-full bg-(--primary)/10 text-(--primary) font-medium">
					{tag}
				</span>
			{/each}
			{#if hiddenTagCount > 0}
				<span class="text-[0.6rem] px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500">
					+{hiddenTagCount}
				</span>
			{/if}
		</div>
	{/if}
{/snippet}

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
