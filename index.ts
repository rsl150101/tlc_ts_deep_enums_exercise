/*
  Do not change
*/

// enums
export enum Status {
  Initialized = "Initialized",
  Pending = "Pending",
  Complete = "Complete",
}

enum Color {
  Red,
  Blue,
  Black,
}

enum Car {
  Sedan,
  Truck,
  Coupe,
}

enum ProgrammingLanguage {
  TypeScript = "TypeScript",
  JavaScript = "JavaScript",
  Python = "Python",
  Golang = "Golang",
}

type Customer = {
  firstName: string;
  lastName: string;
};

// ------------

/*
1. 다음을 충족하는 타입을 완성하고 inventory 객체에 타입을 반영하세요.
  Car enum 사용 필수.
  string 키 사용 금지.
*/

type Inventory = {
  [key in keyof typeof Car]?: keyof typeof Color;
};

const inventory: Inventory = {
  Sedan: "Red",
  Truck: "Black",
};
//- enum의 key 값을 가져오기 위해서는 keyof typeof 사용
//- 참조 : https://www.typescriptlang.org/docs/handbook/enums.html#enums-at-compile-time
//? keyof typeof 사용하지 않고도 가능한지 궁금합니다!

//* 피드백 적용
//? 가능합니다! Car enum이 숫자형 enum이라 keyof typeof가 필요합니다 - 문자형 enum으로 전환 후 keyof typeof 없이 사용해보세요.

enum Carr {
  Sedan = "Sedan",
  Truck = "Truck",
  Coupe = "Coupe",
}

type Inventoryy = {
  [key in Carr]?: keyof typeof Color;
};

const inventoryy: Inventoryy = {
  Sedan: "Red",
  Truck: "Black",
};

/*
2. 다음을 충족하는 타입을 완성하고 colors 객체에 타입을 반영하세요.
  Color enum 사용 필수.
  모든 키 필수.
*/

type TColor = {
  [key in keyof typeof Color]: string[];
};

const colors: TColor = {
  Red: ["red"],
  Blue: [],
  Black: ["obsidian", "ink"],
};

/*
3. 다음을 충족하는 타입을 완성하시오.
  Color enum 사용 필수.
  "Red" | "Blue" | "Black" 사용 금지.
*/

type ColorKey = keyof typeof Color;

const someRose: ColorKey = "Red";
const someSky: ColorKey = "Blue";
const someTerminal: ColorKey = "Black";

// 함수 & enum

/*
4. 다음 함수를 완성하세요.
  인자에 적절한 타입 반영.
  반환 타입 반영.
  테스트를 패스 할 함수 로직 작성.
*/

export function getSum(number1: number, number2: number): number {
  return number1 + number2;
}

/*
5. 다음 두 함수를 완성하세요.
  인자에 적절한 타입 반영.
  함수이름을 읽고 적절한 반환 타입 반영.
  테스트를 패스 할 함수 로직 작성.
*/

export function isStatusPending(status: Status): boolean {
  return status === Status.Pending;
}

export function isStatusComplete(status: Status) {
  return status === Status.Complete;
}

/*
6. 다음 함수를 완성하세요
  반환 타입 작성 후 함수에 적용.
  in 키워드 사용 필수.
  typecasting 금지.
  string 키 사용 금지.
  무엇을 반환하는지 test spec 확인해보기.
보너스: .reduce 함수를 사용하기.

예: { Initialized: "initialized" }
*/

// 반환 타입
type StatusObject = {
  [x in Status]?: string;
};

//* 피드백 적용
//? a, b보다 더 적합한 이름이 있을 것 같은데요!

export function getStatusObject(): StatusObject {
  return Object.keys(Status).reduce((acc, propertyKey) => {
    return { ...acc, [propertyKey]: propertyKey.toLowerCase() };
  }, {});
}

/*
7. 반환 타입을 반환하는 함수를 작성하세요.
  typecasting 사용해보기.
*/

//* 피드백 적용
//? Object.<메소드>를 사용해서 풀어보세요

export function getCars(): Car[] {
  return Object.values(Car) as Car[];
}

/*
8. 다음 함수를 완성하세요.
  반환 타입 작성 후 함수에 적용.
  Object.entries 사용 필수.
  무엇을 반환하는지 test spec 확인해보기.

예: { 10: TypeScript } | key는 value의 length
*/

// 반환 타입
type TProgrammingLanguages = {
  [key: number]: ProgrammingLanguage;
};

//* 피드백 적용
//? item보다 더 적합한 이름이 있을 것 같습니다 - 확인바랍니다

export function getProgrammingLanguages(): TProgrammingLanguages[] {
  return Object.entries(ProgrammingLanguage).map((propertyKeyValue) => {
    return { [propertyKeyValue[0].length]: propertyKeyValue[1] };
  });
}

/*
9. TOrder를 작성하고 orders 객체에 반영하세요 
*/

type TOrder = {
  [x: string]: {
    status: Status;
    color: Color;
    availableColors: [Color];
    orderedBy: Customer;
  };
};

const orders: TOrder = {
  firstCar: {
    status: Status.Initialized,
    color: Color.Black,
    availableColors: [Color.Red],
    orderedBy: {
      firstName: "jane",
      lastName: "doe",
    },
  },
  secondCar: {
    status: Status.Complete,
    color: Color.Blue,
    availableColors: [Color.Black],
    orderedBy: {
      firstName: "john",
      lastName: "doe",
    },
  },
};

/*
10. TCustomerCar를 작성하고 customerCars 객체에 반영하세요
string 타입 사용 금지
*/

type TCustomerCar = {
  [x: number]: {
    customerLastName: Customer["lastName"];
    car: Car;
    carColor: keyof typeof Color;
  };
};

const customerCars: TCustomerCar = {
  1: {
    customerLastName: "skywalker",
    car: Car.Coupe,
    carColor: "Red",
  },
  2: {
    customerLastName: "jedi",
    car: Car.Sedan,
    carColor: "Blue",
  },
};
