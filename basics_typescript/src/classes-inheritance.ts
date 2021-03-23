export { };

//Typescript 3.8

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

//Superclass

abstract class Item {//Avoid to generate new intances from this class
    protected readonly id: number;
    protected title: string;
    constructor (id: number, title: string) {
        this.id = id;
        this.title = title;
    }

    public get _id() {
        return this.id;
    }

    // public set _id(id: number) {
    //     this.id = id;
    // }
    public get _title() {
        return this.title;
    }

    public set _title(title: string) {
        this.title = title;
    }
}

class Picture extends Item {
    //Properties
    public static photoOrientation= PhotoOrientation;
    private orientation: PhotoOrientation;

    constructor(id: number, title:string, orientation: PhotoOrientation) {
        super(id,title);        
        this.orientation = orientation;
    }

    public get _orientation() {
        return this.orientation;
    }

    public set _orientation(orientation: PhotoOrientation) {
        this.orientation = orientation;
    }

    //Behavior
    toString() {
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this.orientation}]`;
    }
}

class Album extends Item {
    private picture: Picture[];

    constructor(id: number, title: string) {
        super(id, title)
        this.picture = [];
    }    

    addPicture(picture: Picture) {
        this.picture.push(picture);
    }
}

const album: Album = new Album(1, "Last Vacations");
const picture: Picture = new Picture(2, "example", PhotoOrientation.Landscape);
album.addPicture(picture);

console.log("album", album);

//Accessing to the private members

// picture._id = 100;
picture._title = "Another title";
album._title = "Title changed";

console.log("album", album);

//Test static member of class Picture
console.log("PhotoOrientation", Picture.photoOrientation.Landscape);
