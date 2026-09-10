import assert from 'node:assert/strict';import{createRequire}from'node:module';const require=createRequire(import.meta.url);const M=require('./model.js');
const base={water:7,light:7,grass:7,flowers:7,rabbits:4,grasshoppers:4,foxes:3};
assert.deepEqual(M.step(base),M.step(base));assert.equal(M.viable(['grass','clover','rabbit','grasshopper','fox']),true);assert.equal(M.viable(['grass','rabbit','fox']),false);
const dry={water:1,light:8,grass:2,flowers:2,rabbits:8,grasshoppers:4,foxes:0};assert.equal(M.plantTrend(dry,M.step(dry)),'down');
const noFood={water:0,light:0,grass:0,flowers:0,rabbits:5,grasshoppers:5,foxes:0};const after=M.step(noFood);assert.ok(after.rabbits<5&&after.grasshoppers<5);
for(const v of Object.values(M.step({water:-4,light:99,grass:50,flowers:-2,rabbits:30,grasshoppers:0,foxes:99})))assert.ok(Number.isFinite(v)&&v>=0&&v<=10);
console.log('6 deterministic model checks passed');
