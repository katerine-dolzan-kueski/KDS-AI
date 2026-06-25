#!/usr/bin/env bash

# join types with | to form regex ORs
r_types="feat|fix|security|deprecated|chore|docs|perf|refactor|style|test|build|ci|revert|merge"
# Conventional Pattern for demonstration
r_conventional="\(PRODU(CT)?\-[0-9]+\)!?:\s.+" # ([Project]-[Number]): [any text]
# the full regex pattern
pattern="^($r_types)$r_conventional$"
# Find merge or revert commits
merge_revert_pattern="(^Merge)|(^Revert)"

# The commit message file
msg_file="$1"

# Check if commit is conventional commit and continue
if grep -Eq "$pattern" "$msg_file" || grep -Eq "$merge_revert_pattern" "$msg_file"; then
	echo "The message match with convention"
	exit 0
fi

# Explain about failure
IFS='|' read -r -a types <<< $r_types
printf "\e[31;1m%s\e[0m\n" "[Commit message not match Convention] --> $(cat "$msg_file")"
echo "
Your commit message does not follow Conventional Commits formatting
https://www.conventionalcommits.org

Conventional Commits start with one of the below types."
echo ""
printf "\e[31;1m%s\e[0m\n" "List of availables types:"
echo ""
for item in "${types[@]}"; do
	printf "\e[33;1m%s\e[0m\n" " $item"
done
echo "
Include a scope in parentheses after the type for more context:
  fix(TASK-ID): remove infinite loop
If it's a breaking change, please use breaking change indicator:
  fix(TASK-ID)!: remove infinite loop
"

exit 1
