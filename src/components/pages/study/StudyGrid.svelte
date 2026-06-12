<script lang="ts">
	import type { StudyCategory } from "@/types/studyPlan";
	import TabNav from "../bangumi/TabNav.svelte";
	import StudySection from "./StudySection.svelte";

	interface Props {
		categories: StudyCategory[];
	}

	const props = $props();
	const categories = $derived(props.categories);

	let activeTab = $state("");

	$effect(() => {
		if (categories.length > 0 && !activeTab) {
			activeTab = categories[0].id;
		}
	});

	const tabs = $derived(
		categories.map((cat) => ({
			id: cat.id,
			name: cat.name,
			count: cat.items.length,
		})),
	);

	function handleTabChange(tabId: string) {
		activeTab = tabId;
	}
</script>

{#if categories.length === 0}
	<div class="text-center py-16 text-neutral-500">
		<p class="text-lg font-medium">暂无学习计划</p>
		<p class="text-sm mt-2">在配置文件中添加你的学习计划吧</p>
	</div>
{:else}
	<TabNav {tabs} {activeTab} onTabChange={handleTabChange} />

	{#each categories as category}
		<StudySection
			sectionId={category.id}
			items={category.items}
			isActive={activeTab === category.id}
		/>
	{/each}
{/if}
