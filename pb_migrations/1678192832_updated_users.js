migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("users_avatar")

  // remove
  collection.schema.removeField("nehgbdx0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yn5kkzn1",
    "name": "admin",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "users_avatar",
    "name": "avatar",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/gif",
        "image/webp"
      ],
      "thumbs": null
    }
  }))

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

  // remove
  collection.schema.removeField("yn5kkzn1")

  return dao.saveCollection(collection)
})
