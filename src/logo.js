import mercedesLogo from './logos/mercedes-logo.png';
import bmwLogo from './logos/bmw-logo.png';
import toyotaLogo from './logos/toyota-logo.png';
import nissanLogo from './logos/nissan-logo.png';
import fordLogo from './logos/ford-logo.png';

import harleyLogo from './logos/harley-logo.png';
import kawasakiLogo from './logos/kawasaki-logo.png';
import yamahaLogo from './logos/yamaha-logo.png';
import hondaLogo from './logos/honda-logo.png';

export const logo = {
    carLogo: [
        {name: 'Mercedes-Benz', brandLogo: mercedesLogo},
        {name: 'BMW', brandLogo: bmwLogo},
        {name: 'Toyota', brandLogo: toyotaLogo},
        {name: 'Nissan', brandLogo: nissanLogo},
        {name: 'Ford', brandLogo: fordLogo}
    ],
    getCarLogo: function(id) {
        for(let i = 0; i < this.carLogo.length; i++) {
            if(this.carLogo[i].name === id) {
                return this.carLogo[i].brandLogo
            }
        }
    },
    motoLogo: [
        {name: 'Harley-Davidson', brandLogo: harleyLogo},
        {name: 'BMW', brandLogo: bmwLogo},
        {name: 'Kawasaki', brandLogo: kawasakiLogo},
        {name: 'Yamaha', brandLogo: yamahaLogo},
        {name: 'Honda', brandLogo: hondaLogo}
    ],
    getMotoLogo: function(id) {
        for(let i = 0; i < this.motoLogo.length; i++) {
            if(this.motoLogo[i].name === id) {
                return this.motoLogo[i].brandLogo
            }
        }
    }
};


