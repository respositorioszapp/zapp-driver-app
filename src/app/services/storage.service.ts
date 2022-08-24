import { Injectable } from '@angular/core';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // JSON "set" 
  async setObject(key,jsonOject) {
    await Storage.set({
      key: key,
      value: JSON.stringify(jsonOject)
    });
  }

  // JSON "get" 
  async getObject(key) {
    const ret = await Storage.get({key});
    return JSON.parse(ret.value);
  }

  async setItem(key,value) {
    await Storage.set({key,value});
  }

  async getItem(key) {
    const { value } = await Storage.get({key});
    return value;
  }

  async removeItem(key) {
    await Storage.remove({key});
  }

  async keys() {
    const { keys } = await Storage.keys();
    return keys;
  }
  
  async clear() {
    await Storage.clear();
  }
}
