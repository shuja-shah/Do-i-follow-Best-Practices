class Size {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

class Image {
    // Add methods here
    constructor(url, size) {
        this.url = url;
        this.width = size.width;
        this.height = size.height;
    }
      
       getUrl() {
        return this.url;
    }
    setUrl(url) {
        this.url = url;
    }
    setSize(width, height) {
        this.width = width;
        this.height = height;
    }
    getSize() {
        return new Size(this.width, this.height);
    }
    cloneImage() {
        return new Image(this.url, new Size(this.width, this.height));
    }
    
}
