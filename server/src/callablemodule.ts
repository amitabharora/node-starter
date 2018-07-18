export function sayHello() {
  console.log(`Hello! time is ${Date.now()}`)
  console.log(`returnPerson = ${JSON.stringify(returnPerson({req: "Amitabh", res: "Arora"}), undefined, 2)}`)
  console.log(`returnPerson = ${JSON.stringify(returnPerson({req: "John"}), undefined, 2)}`)
  console.log(`returnPerson = ${JSON.stringify(returnPerson({req: "Amitabh"}), undefined, 2)}`)
  console.log(`returnPerson = ${JSON.stringify(returnPerson({res: "Arora"}), undefined, 2)}`)
  console.log(`returnPerson = ${JSON.stringify(returnPerson({}), undefined, 2)}`)
  console.log('--------------------------')
  console.log(`returnPersonBetter = ${JSON.stringify(returnPerson({req: "Amitabh", res: "Arora"}), undefined, 2)}`)
  console.log(`returnPersonBetter = ${JSON.stringify(returnPerson({req: "John"}), undefined, 2)}`)
  console.log(`returnPersonBetter = ${JSON.stringify(returnPerson({req: "Amitabh"}), undefined, 2)}`)
  console.log(`returnPersonBetter = ${JSON.stringify(returnPerson({res: "Arora"}), undefined, 2)}`)
  console.log(`returnPersonBetter = ${JSON.stringify(returnPerson({}), undefined, 2)}`)

}

export function returnPerson({req = "John", res = "Doe"}: {req?: string, res?: string}): { first: string; last: string } {
  return {first: req, last: res}
}

type httpreqres = {req?: string; res?: string}
type user = {first?: string; last?: string}
export function returnPersonBetter(rr: httpreqres): user {
  return {first: rr.req, last: rr.res}
}