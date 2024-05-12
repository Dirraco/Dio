import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)

//Saldo atual

peopleAccount.deposit(180)
console.log(peopleAccount.getID())
console.log(peopleAccount.getName())
console.log(peopleAccount.getBalance())

//informe o valor que deseja sacar

peopleAccount.withdraw(5)
console.log(peopleAccount.getBalance())
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)

//depósito para conta pj
companyAccount.getLoan(20)
console.log(companyAccount.getBalance())
const specialAccount: SpecialAccount = new SpecialAccount('Diego', 21)
console.log(specialAccount)

//depósito com bonus de 10 a mais
specialAccount.deposit10(50)
console.log(specialAccount.getBalance())