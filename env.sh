# Source this file to add the project-local Node 20 toolchain to PATH.
#   bash/zsh:  source ./env.sh
#   fish:      source ./env.fish    # see env.fish
export PATH="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" && pwd)/.node/bin:$PATH"
