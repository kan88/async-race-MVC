import View from './view';
import Model from './model';
import { CarData } from './components/interfaces';
class Controller {
    model: Model;
    view: View;
    constructor(model: Model, view: View) {
        this.model = model;
        this.view = view;
        this.renderDataCars();
        //this.view.amountCars(await this.model.countCars());
        this.renderCars();
        this.renderPagintions();
        this.renderForms();
    }

    async renderDataCars() {
        await this.model.getDefaultCars();
    }

    renderForms() {
        this.view.createImputCreate();
        this.view.createImputChange();
    }

    renderPagintions() {
        this.view.createPagination();
    }

    /* renderCars() {
        this.model.getDefaultCars().then((cars) => {
            console.log(cars);
            cars.forEach((el: CarData) => this.view.createOneCar(el));
        });
    }*/
}
export default Controller;
