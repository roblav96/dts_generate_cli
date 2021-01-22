await import('https://raw.githubusercontent.com/roblav96/jellyfin-debrids/main/src/devops/console.ts')
import * as async from 'https://deno.land/std/async/mod.ts'
import * as fs from 'https://deno.land/std/fs/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'
import * as utf8 from 'https://deno.land/std/encoding/utf8.ts'

// setInterval(Function, 1 << 30)

// console.log('Deno.resources() ->', Deno.resources())
// console.log('Deno.args ->', Deno.args)
// let stdin = await Deno.readAll(Deno.stdin)
// console.log('stdin ->', stdin)

// deno run --unstable --no-check --allow-all mod.ts <(cat ../jellyfin-debrids/package.json)
let fd = await Deno.readFile(Deno.args[0])
console.log('utf8.decode(fd) ->', JSON.parse(utf8.decode(fd)))
