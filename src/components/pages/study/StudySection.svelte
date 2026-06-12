<script lang="ts">
	import type { StudyItem } from "@/types/studyPlan";
	import FilterControls from "../bangumi/FilterControls.svelte";
	import ClientPagination from "../../common/ClientPagination.svelte";
	import StudyCard from "./StudyCard.svelte";

	interface Props {
		sectionId: string;
		items: StudyItem[];
		isActive: boolean;
		itemsPerPage?: number;
	}

	const {
		sectionId,
		items,
		isActive,
		itemsPerPage = 12,
	}: Props = $props();

	const STATUS_MAP: Record<string, string> = {
		planned: "planned",
		in_progress: "in_progress",
		completed: "completed",
	};

	const FILTER_LABELS: Record<string, string> = {
		all: "全部",
		planned: "计划中",
		in_progress: "进行中",
		completed: "已完成",
	};

	let activeFilter = $state("all");
	let currentPage = $state(1);

	const statusCounts = $derived.by(() => {
		const counts: Record<string, number> = {};
		for (const item of items) {
			const key = item.status || "planned";
			counts[key] = (counts[key] || 0) + 1;
		}
		return counts;
	});

	const filters = $derived.by(() => {
		const result = [{ value: "all", label: FILTER_LABELS.all, count: items.length }];
		for (const key of ["planned", "in_progress", "completed"]) {
			const count = statusCounts[key] || 0;
			if (count > 0) {
				result.push({ value: key, label: FILTER_LABELS[key], count });
			}
		}
		return result;
	});

	const filteredItems = $derived.by(() => {
		if (activeFilter === "all") return items;
		return items.filter((item) => item.status === activeFilter);
	});

	const totalPages = $derived(Math.max(1, Math.ceil(filteredItems.length / itemsPerPage)));

	const pagedItems = $derived.by(() => {
		const start = (currentPage - 1) * itemsPerPage;
		return filteredItems.slice(start, start + itemsPerPage);
	});

	function handleFilterChange(filter: string) {
		activeFilter = filter;
		currentPage = 1;
	}

	function goToPage(page: number) {
		if (page >= 1 && page <= totalPages) {
			const grid = document.getElementById(`study-grid-${sectionId}`);
			if (grid) {
				grid.scrollIntoView({ behavior: "smooth", block: "start" });
			}
			currentPage = page;
		}
	}
</script>

<div id="study-grid-{sectionId}" class:hidden={!isActive}>
	<FilterControls
		filters={filters}
		activeFilter={activeFilter}
		onFilterChange={handleFilterChange}
	/>

	{#if filteredItems.length === 0}
		<div class="text-center py-12 text-neutral-500">
			<p class="text-sm">该分类下暂无条目</p>
		</div>
	{:else}
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
			{#each pagedItems as item}
				<StudyCard {item} />
			{/each}
		</div>

		{#if totalPages > 1}
			<ClientPagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={goToPage}
			/>
		{/if}
	{/if}
</div>
