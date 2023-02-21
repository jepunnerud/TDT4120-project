migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0rori2hau6orjn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9mzxdfi1",
    "name": "description",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 500,
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
    "id": "9mzxdfi1",
    "name": "description",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 200,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
