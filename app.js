Array.prototype._forEach = function(fn) {
  for (const element of this) {
    fn(element);
  }
};

Array.prototype._indexOf = function(searchedElement) {
  for (let index = 0; index < this.length; index++) {
    if (this[index] === searchedElement) {
      return index;
    }
  }

  return -1;
};

Array.prototype._indexOfRecursive = function(searchedElement, index = 0) {
  if (this[0] === searchedElement) {
    return index;
  }

  if (this.length === 0) {
    return -1;
  }

  return this.slice(1)._indexOfRecursive(searchedElement, index + 1);
};

Array.prototype._filter = function(filterFn) {
  const filteredList = [];

  for (element of this) {
    if (filterFn(element)) {
      filteredList.push(element);
    }
  }

  return filteredList;
};

Array.prototype._some = function(fn) {
  for (const element of this) {
    if (fn(element)) {
      return true;
    }
  }

  return false;
};

Array.prototype._every = function(fn) {
  for (const element of this) {
    if (!fn(element)) {
      return false;
    }
  }

  return true;
};

Array.prototype._find = function(fn) {
  for (const element of this) {
    if (fn(element)) {
      return element;
    }
  }

  return undefined;
};

Array.prototype._includes = function(elem) {
  return _indexOf(this, elem) > -1;
};

Array.prototype._map = function(mapFn) {
  const mappedList = [];

  for (elem of this) {
    const mappedElem = mapFn(elem);
    mappedList.push(mappedElem);
  }

  return mappedList;
};

Array.prototype._reduce = function(reducer, initialValue) {
  let startIndex = 0;

  if (initialValue === undefined) {
    initialValue = this[0];
    startIndex = 1;
  }

  let accumulator = initialValue;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = reducer(accumulator, arr[i]);
  }

  return accumulator;
};

Array.prototype.removeDuplicates = function() {
  return [...new Set(this)];
};

Array.prototype._intersection = function() {
  return this._filter(this, x => this._includes(this, x)).removeDuplicates();
};

Array.prototype._union = function() {
  const arraysUnion = this.removeDuplicates();

  for (const elem of this) {
    if (!this._includes(arraysUnion, elem)) {
      arraysUnion.push(elem);
    }
  }

  return arraysUnion;
};

Array.prototype._min = function() {
  return Math.min(...this);
};

Array.prototype._max = function() {
  return Math.max(...this);
};
