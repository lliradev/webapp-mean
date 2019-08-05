export class Menu {
    constructor(_id = '', type = '', name = '', description = '', 
    price = 0, image = '', public_id = '') {
        this._id = _id;
        this.type = type;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.public_id = public_id;
    }

    _id: string;
    type: string;
    name: string;
    description: string;
    price: number;
    image: string;
    public_id: string;
}
