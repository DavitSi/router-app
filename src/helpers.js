import { logo } from './logo';

export const car = {
    carList: [
        {name: 'Mercedes-Benz', year: 1926, location: 'Germany', carLogo: logo},
        {name: 'BMW', year: 1916, location: 'Germany'},
        {name: 'Toyota', year: 1937, location: 'Japan'},
        {name: 'Nissan', year: 1933, location: 'Japan'},
        {name: 'Ford', year: 1903, location: 'USA'},
    ],
    all: function() {
        return this.carList
    },
    getCarId: function(id) {
       for(let i = 0; i < this.carList.length; i++) {
            if(this.carList[i].name === id) {
                return this.carList[i]
            }
       }
    }
}

export const moto = {
    motoList: [
        {name: 'Harley-Davidson', year: 1903, location: 'USA'},
        {name: 'BMW', year: 1916, location: 'Germany'},
        {name: 'Kawasaki', year: 1896, location: 'Japan'},
        {name: 'Yamaha', year: 1955, location: 'Japan'},
        {name: 'Honda', year: 1937, location: 'Japan'},
    ],
    all: function() {
        return this.motoList
    },
    getMotoId: function(id) {
       for(let i = 0; i < this.motoList.length; i++) {
            if(this.motoList[i].name === id) {
                return this.motoList[i]
            }
       }
    }
}