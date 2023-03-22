migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0rori2hau6orjn")

  // remove
  collection.schema.removeField("vicljp9e")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0rori2hau6orjn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vicljp9e",
    "name": "rating",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 5
    }
  }))

  return dao.saveCollection(collection)
})
