export { };

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    //Properties
    private id: number;
    title: string;
    orientation: PhotoOrientation;

    constructor(id: number, title: string, orientation: PhotoOrientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    //Behavior
    toString() {
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this.orientation}]`;
    }
}

class Album {
    private id: number;
    title: string;
    picture: Picture[];

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
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

//Accessing to the public members

// picture.id = 100;
picture.title = "Another title";
album.title = "Title changed";

console.log("album", album);
