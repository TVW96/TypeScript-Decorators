function SimpleLogger():void {
    // Add your code here
  }
  
function ReadOnly():void {
    // Add your code here
  }
  
function LogMethod():void {
    // Add your code here
  }

// Add your code throughout the following class
class MyTestClass {
property1: any;

constructor(property1: string, property2: number) {
  this.property1 = property1;
}

get prop1() {
  return this.property1;
}

method1(): void {
}
}

export { MyTestClass }