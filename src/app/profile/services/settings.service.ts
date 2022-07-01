import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class SettingsService {
    user = {
        firstName: "Guilhem",
        lastName: "GABRIELLI",
        email: "gg@gmail.com",
        password: "password",
        imageUser : ""
    }

    getDataUser() {
        return this.user;
    }
}