'use strict';

// For consistency with Responses, Conditions
// are also functions.

export class Conditions {
  static targetIsYou() {
    return (data, matches) => {
      return data.me == matches.target;
    };
  }
  static targetIsNotYou() {
    return (data, matches) => {
      return data.me !== matches.target;
    };
  }
  static caresAboutAOE() {
    return (data) => {
      return data.role == 'tank' || data.role == 'healer' || data.CanAddle() || data.job == 'BLU';
    };
  }
  static caresAboutMagical() {
    return (data) => {
      return data.role == 'tank' || data.role == 'healer' || data.CanAddle() || data.job == 'BLU';
    };
  }
  static caresAboutPhysical() {
    return (data) => {
      return data.role == 'tank' || data.role == 'healer' || data.CanFeint() || data.job == 'BLU';
    };
  }
}
