const KeycloakPolicy = require('./KeycloakPolicy');

class KeycloakGroupPolicy extends KeycloakPolicy {

    constructor({id, name, description, logic, groups = [] }){
        super({id, name, description, logic, type: KeycloakPolicy.type.GROUP_BASED });
        this._groups = groups;
    }

    setGroups(value){
        if(!value) throw new Error("Groups is required");
        this._groups = value;
        return this;
    }

    get groups(){
        return this._groups;
    }

    /**
     * @override
     */
    serialize(){
        let obj = super.serialize();
        obj.groups = this._groups;
        return obj;
    }

}

module.exports = KeycloakGroupPolicy;