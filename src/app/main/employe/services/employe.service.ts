import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {SocketService} from '../../../../@comet/services/socket.service';

@Injectable()
export class EmployeService {

    employeListed$: Observable<any>;
    employeAdded$: Observable<any>;
    employeUpdated$: Observable<any>;
    employeDeleted$: Observable<any>;

    constructor(private socket: SocketService) {

        this.socket.join('employe');
        // Every socket EMPLOYE event has it's own observable, will be used by ngrx effects
        this.employeListed$ = this.socket.listen('[Employe] Listed');
        this.employeAdded$ = this.socket.listen('[Employe] Added');
        this.employeUpdated$ = this.socket.listen('[Employe] Updated');
        this.employeDeleted$ = this.socket.listen('[Employe] Deleted');

    }


    // These methods will be called by ngrx effects (do not use directly in the components)
    listEmploye() {
        this.socket.emit('[Employe] List');
    }

    addEmploye(employe) {
        this.socket.emit('[Employe] Add', employe);
    }

    updateEmploye(employe) {
        this.socket.emit('[Employe] Update', employe);
    }

    deleteEmploye(employe) {
        this.socket.emit('[Employe] Delete', employe);
    }

}