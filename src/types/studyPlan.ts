export interface StudyItem {
	title: string;
	description?: string;
	status: "planned" | "in_progress" | "completed";
	tags?: string[];
	link?: string;
	cover?: string;
	date?: string;
}

export interface StudyCategory {
	id: string;
	name: string;
	icon?: string;
	items: StudyItem[];
}

export interface StudyPlanConfig {
	categories: StudyCategory[];
}
