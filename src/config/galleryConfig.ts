import type { GalleryConfig } from "@/types/galleryConfig";

// 相册配置
export const galleryConfig: GalleryConfig = {
	// 相册列表
	albums: [
		// 支持jpg/png/webp/avif/gif格式
		// id: 相册唯一标识符，对应 public/gallery/ 下的子目录，如 id: "travel", 对应 public/gallery/travel/
		// cover: 手动指定封面图（可选，不填会把cover.*文件作为封面图）
		// name: 相册名称 / description: 相册描述 / location: 拍摄地点 / date: 日期 (YYYY-MM-DD)
		// tags: 相册标签 / password: 访问密码（可选）/ passwordHint: 密码提示（可选）
		{
			id: "travel",
			name: "旅行记录",
			description: "走过的路，看过的风景。",
			location: "",
			date: "2026-06-12",
			tags: ["旅行", "风景"],
		},
	],

	// 瀑布流最小列宽(px)，浏览器根据容器宽度自动计算列数，默认 240
	// 值越小列数越多，值越大列数越少
	columnWidth: 240,
};
