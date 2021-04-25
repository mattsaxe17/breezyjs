import './comparison'

// Returns an exact copy of a collection
Object.prototype.clone = function () {
  return JSON.parse(JSON.stringify(this));
}