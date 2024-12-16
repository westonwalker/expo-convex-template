import { cronJobs } from "convex/server";
import { internal, api } from "./_generated/api";

const crons = cronJobs();

export default crons;

// crons.cron(
// 	"Run a function every minute",
// 	"* * * * *",
// 	internal.features.games.markStartedGamesInProgress
// );
