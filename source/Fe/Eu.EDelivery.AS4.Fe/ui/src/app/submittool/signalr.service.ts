import { Injectable } from '@angular/core';
import { SignalRConnection, BroadcastEventListener, SignalR, ISignalRConnection } from 'ng2-signalr';

import { LogMessage } from '../submittool/submit/submit.component';
import { AuthenticationService } from './../authentication/authentication.service';

@Injectable()
export class SignalrService {
    public onMessage: BroadcastEventListener<LogMessage>;
    private _srConnection: ISignalRConnection | null;
    constructor(private _connection: SignalR, private _authenticationService: AuthenticationService) {
        this.onMessage = new BroadcastEventListener<LogMessage>('onMessage');
        this._authenticationService
            .onAuthenticate
            .filter((result) => result)
            .subscribe(() => {
                if (!!this._srConnection) {
                    this._srConnection.stop();
                    this._srConnection = null;
                    return;
                }

                this.connect();
            });
    }
    private connect() {
        this._connection
            .connect({
                qs: { access_token: this._authenticationService.getToken()! }
            })
            .then((result) => {
                this._srConnection = result;
                result.listen(this.onMessage);
            });
    }
}