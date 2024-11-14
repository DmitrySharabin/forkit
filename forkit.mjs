import { execSync } from "child_process";

function getRepoURL(from) {
	if (from.startsWith("https://github.com")) {
		return from;
	}

	return `https://github.com/${from}.git`;
}

let [from, to, toPath] = process.argv.slice(2);
if (!from || !to) {
	console.error("Not enough arguments. Usage: node forkit.mjs <public_repo_URL> <private_fork_URL> [<path_to_clone_to>]");
	process.exit(1);
}

[from, to] = [from, to].map(getRepoURL);

console.info(`Forking ${from} to ${to}...`);

let fromFolder = from.split("/").pop();
toPath ??= to.split("/").pop().replace(".git", "");

// Bare-clone the needed public repo (from) and mirror-push it to the private one (to).
execSync(`git clone --bare ${from} && cd ${fromFolder} && git push --mirror ${to}`);

// Clean up the temporary folder.
execSync(`rm -rf ${fromFolder}`);

// Clone the private repo (to) and add the public one (from) as upstream.
execSync(`git clone ${to} ${toPath} && cd ${toPath} && git remote add upstream ${from}`);

console.info("Done!");
