export class User {
 id!: number;
 username!: string;
 password!: string;
 email!: string;
 fullName!: string;
 address!: string;
 phonenum!: string;
 
    constructor(){
        this.id= 0;
        this.username= '';
        this.password= '';
        this.email='';
        this.fullName='';
        this.address= '';
        this.phonenum= '';
    }
}
