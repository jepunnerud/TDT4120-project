migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nehgbdx0",
    "name": "savedBooks",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "g0rori2hau6orjn",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("nehgbdx0")

  return dao.saveCollection(collection)
})
