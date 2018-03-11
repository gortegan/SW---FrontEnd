export class User {
    constructor(
      public name: string,
      public lastname: string,
      public email: string,
      public password: string,
      public id?: number,
      public active: number = 0
    ) {

    }

// tslint:disable-next-line:eofline
};
