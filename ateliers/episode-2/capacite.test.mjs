import test from 'node:test';
import assert from 'node:assert/strict';
import { tableDisponible } from './capacite.mjs';

test('deux convives peuvent réserver quatre places libres', () => {
  assert.equal(tableDisponible(2, 4), true);
});

test('cinq convives dépassent quatre places libres', () => {
  assert.equal(tableDisponible(5, 4), false);
});
