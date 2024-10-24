function SimpleLogger(target: Function) {
  // Add your code here
  // Object.seal(target);
  console.log(`Class created: ${target.name}`)
}

function ReadOnly(target: any, key: string, descriptor: PropertyDescriptor): void {
  // Add your code here
  descriptor.set = function () {
    throw new Error(`Property ${key} of ${target.constructor.name} is read-only`);
  }
}

function LogMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Method ${key} of ${target.constructor.name} called with arguments: ${JSON.stringify(args)}`);
    return originalMethod.apply(this, args);
  };
  return descriptor;
}

// Add your code throughout the following class
@SimpleLogger
class MyTestClass {
  property1: any;
  property2: any;

  constructor(property1: string, property2: number) {
    this.property1 = property1;
    this.property2 = property2
  }
  @ReadOnly
  get prop1() {
    return this.property1;
  }

  @LogMethod
  method1(): void {
    console.log("MyTestClass method1 is created.")
  }
  @LogMethod
  method2(): void {
    console.log("MyTestClass method2 is created.")
  }
}

// Test the decorators
const testInstance = new MyTestClass("test", 42);
testInstance.method1();
testInstance.method2();

try {
  testInstance.prop1 = "new value";
} catch (e) {
  console.error(e.message);
}

console.log(testInstance.prop1);

export { MyTestClass }