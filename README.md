# Create a private fork of any public repo

## Usage

1. Create an empty private repo on GitHub (`private_fork`).
2. `node forkit.mjs <public_repo_URL> <private_fork_URL> [<path_to_clone_to>]`

> [!NOTE]
> If no `path_to_clone_to` is provided, the private fork will be cloned to a folder in the current directory.

## Example

```bash
node forkit.mjs https://github.com/user/foo.git https://github.com/user/private-foo.git ../foo
```

or simply

```bash
node forkit.mjs user/foo user/private-foo ../foo
```

## Syncing with the public repo

1. `cd <private_fork_folder>`
2. `git pull upstream main`
3. `git push origin main`

> [!NOTE]
> Instead of `main`, you can use the name of any branch you want to sync.
