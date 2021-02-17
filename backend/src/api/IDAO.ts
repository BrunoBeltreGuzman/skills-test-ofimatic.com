/*
       Data Access Object (DAO)
*/

export default interface IDAO<Entity, Id> {
       insert(entity: Entity): Promise<any>;

       update(entity: Entity): Promise<any>;

       delete(id: Id): Promise<any>;

       findAll(): Promise<any>;

       findById(id: Id): Promise<any>;
}
