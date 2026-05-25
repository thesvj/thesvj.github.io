# Source this file in fish to add the project-local Node 20 toolchain to PATH.
#   source ./env.fish
set -gx PATH (dirname (status --current-filename))/.node/bin $PATH
