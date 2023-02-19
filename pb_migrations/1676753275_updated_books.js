migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0rori2hau6orjn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ujkdgs4x",
    "name": "title",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": 1,
      "max": 50,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0rori2hau6orjn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ujkdgs4x",
    "name": "title",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 50,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
