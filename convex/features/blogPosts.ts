import { v } from "convex/values";
import { query, mutation } from "../_generated/server";

// QUERIES
export const getAllBlogPosts = query({
	args: {},
	handler: async (ctx) => {
		return await ctx.db.query("blogPosts").collect();
	},
});

export const getBlogPostById = query({
	args: { id: v.id("blogPosts") },
	handler: async (ctx, { id }) => {
		return await ctx.db.get(id);
	},
});

// MUTATIONS
export const createBlogPost = mutation({
	args: {
		title: v.string(),
		body: v.string(),
		author: v.string(),
	},
	handler: async (ctx, { title, body, author }) => {
		const blogPost = await ctx.db.insert("blogPosts", {
			title,
			body,
			author,
			createdAt: Date.now(),
		});
		return blogPost;
	},
});
