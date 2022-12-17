# Contributing Guidelines
## Issues
Use the issue template to create an issue and add it to the
MBO App Alpha Roadmap project. Label it with the appropriate label(s).
## Branches
All work is done in feature branches.
Prefix branch names with "feature/" and the issue number that the branch is meant to address.
For example:
```
feature/28
```
## Commits
The headlines of commit messages start with a link to the issue they're related
to. For example:
```
#14 Remove websocket proxy from api since it doesn't use websockets
```
Try to explain _why_ the change is being made in the headline.
Keep headlines to 72 characters. If needed, add a longer description after two
newlines.
## Pull requests
Complete the checklist in the pull request template. If an item doesn't apply to
the pull request, check it off. Prefix the pull request title with the issue number. For example:
```
#28 Implement standardised documentation and linting
```
### Merging
Ensure the branch associated with the pull request is deleted after it is merged
into the `main` branch.