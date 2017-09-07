export class UserModel {
  public index: number = 0;
  public email: string;
  public role: any;
  public hash: number;
  public date: any;
  public name: string;
  public isActive: boolean;
  public id: string;
  public img: string ='https://wrappixel.com/ampleadmin/ampleadmin-html/plugins/images/large/img1.jpg';
  constructor(data) {
    this.index = data.index;
    this.email = data.email;
    this.role = data.role;
    this.hash = data.hash;
    this.date = data.date;
    this.name = data.name;
    this.isActive = data.active;
    this.id = data.id;
  }
}
