import { makeAutoObservable } from "mobx";
import { IUserRegistryData, IRegistryProgress } from "../../../interface";

export class Store {
  private _registryData: IUserRegistryData = {} as IUserRegistryData;

  private _registryProgress: IRegistryProgress = { step: 1 };

  constructor() {
    makeAutoObservable(this);
  }

  get registryData(): IUserRegistryData {
    return this._registryData;
  }
  set registryData(value: IUserRegistryData) {
    this._registryData = value;
  }

  get registryProgress(): IRegistryProgress {
    return this._registryProgress;
  }
  set registryProgress(value: IRegistryProgress) {
    this._registryProgress = value;
  }

  public resetRegistryData(): void {
    this._registryData = {} as IUserRegistryData;
  }
}

export const UserDonationStore = new Store();
