import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export const BlogPostFields = {
	body: v.string(),
	title: v.string(),
	author: v.string(),
	createdAt: v.number(),
};

export default defineSchema({
	blogPosts: defineTable(BlogPostFields),
});
