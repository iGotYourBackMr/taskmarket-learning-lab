import assert from 'node:assert/strict';import{createRequire}from'node:module';const require=createRequire(import.meta.url);const M=require('./model.js');
assert.equal(M.clamp(-4),0);assert.equal(M.clamp(12),10);assert.equal(M.clamp(5),5);
assert.equal(M.complement(0),10);assert.equal(M.complement(5),5);assert.equal(M.complement(7),3);
assert.equal(M.solve({a:3,b:2,op:'+'}),5);assert.equal(M.solve({a:9,b:4,op:'-'}),5);assert.equal(M.solve({a:6,b:6,op:'-'}),0);
assert.equal(M.equation({a:7,b:3,op:'+'}),'7 + 3 = 10');console.log('10 domain checks passed');
