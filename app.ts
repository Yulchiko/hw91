import {IMission} from "./Interface";
import {IUser} from "./Interface";

const missionCorner = (mission: Partial<IMission>): Partial<IMission> => {
    return mission
}

missionCorner({launch_date_local: '2020-10-24T11:31:00-04:00'});

function sum(a: number, b: number): number {
    return a + b;
}

function showSum(a: number, b: number): void {
    console.log(a + b);
}

function incAge(someUser: IUser, inc: number): IUser {
    someUser.age += inc
    return someUser
}
console.log(sum(1, 2));
showSum(2,3)
incAge({name:'Cergeo',age:32,gender:'male'}, 2)