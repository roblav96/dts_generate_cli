#!/usr/bin/env just --justfile
# https://github.com/casey/just

_default :
	@just --dump



install main='mod.ts' :
	deno cache --unstable --no-check --reload "{{main}}"

run main='mod.ts' :
	@tput clear && echo
	deno cache --unstable --no-check "{{main}}" || true
	deno run --unstable --no-check --allow-all "{{main}}"
watch main='mod.ts' :
	watchexec --no-default-ignore --no-vcs-ignore --restart --exts ts -- just run "{{main}}"
