const product = [];

module.exports= class User{
    constructor(t) {
        this.title=t;

    }

    save()
    {
        product.push(this)
    }
    static fetchAll()
    {
        return product;
    }
}