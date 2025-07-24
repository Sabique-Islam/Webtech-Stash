function User(name, age) {
    this._name = name;
    this._age = age;

    Object.defineProperty(this, "name", {
        get : function(){
            return this._name.toUpperCase();
        },
        set : function(newName) {
            this._name = newName;
        }
    })
}