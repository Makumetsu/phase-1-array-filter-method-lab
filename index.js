function findMatching(array1, names) {
    return array1.filter(function (element) {
      return element.toLowerCase() === names.toLowerCase();
    });
  }
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(function (driver) {
      return driver.startsWith(letters);
    });
  }
  function matchName(drivers, name) {
    return drivers.filter(function (driver) {
      return driver.name === name;
    });
  }