class Recipe {
    public id: string;
    public name: string;
    public description: string;
    public image: string;

    constructor(id: string, name: string, desc: string, image: string) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.image = image;
    }
}

export { Recipe };