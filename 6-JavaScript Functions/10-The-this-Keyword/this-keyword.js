// ==============================================
// (10) The 'this' Keyword
// ==============================================

/**
 * DEFINITION:
 * Refers to the object that owns the executing function.
 */

const car = {
  brand: "Toyota",
  showBrand: function () {
    console.log(this.brand);
  },
};

// Regular call works
car.showBrand(); // "Toyota"

// 'this' gets lost when separated
const show = car.showBrand;
// show(); // Would throw error in Node.js (different from browser)

// Solution: .bind()
const boundShow = car.showBrand.bind(car);
boundShow(); // "Toyota"
