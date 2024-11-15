# Create a private fork of any public repo

Clone this repo and `cd` into the cloned folder (with the `forkit.mjs` file).

## Usage

>[!NOTE]
>You will need to have [Node.js](https://nodejs.org/) installed.

1. Create an empty private repo on GitHub (`private_fork`).
2. In the terminal, run `node forkit.mjs <public_repo_URL> <private_fork_URL> [<path_to_clone_to>]`

> [!NOTE]
> If no `path_to_clone_to` is provided, the private fork will be cloned to a folder in the current directory.

## Example

```shell
node forkit.mjs https://github.com/user/foo.git https://github.com/user/private-foo.git ../foo
```

or simply

```shell
node forkit.mjs user/foo user/private-foo ../foo
```

## Syncing with the public repo

1. `cd <private_fork_folder>`
2. `git pull upstream <branch_name>`
3. `git push origin <branch_name>`

## Pushing to the public repo (if it's also yours or you have permission to push)

`git push upstream <branch_name>`
