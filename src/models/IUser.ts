import {IAddress} from "./models/IAddress";
import {IBank} from "./models/IBank";
import {ICompany} from "./models/ICompany";

export interface IUser {
	  id: number,
      firstName: string,
      lastName: string,
      maidenName: string,
      age: number,
      gender: string,
      email: string,
      phone: string,
      username: string,
      password: string,
      birthDate: string,
      image: string,
      bloodGroup: string,
      height: number,
      weight: number,
      eyeColor: string,
      hair: {color: string, type: string},
      ip: string,
      address: IAddress,
      macAddress: string,
      university: string,
      bank: IBank,
      company: ICompany,
      ein: string,
      ssn: string,
      userAgent: string,
      crypto: {
        coin: string,
        wallet: string,
        network: string},
      role: string
}