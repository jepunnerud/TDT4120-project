migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0rori2hau6orjn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ltfj585z",
    "name": "releaseyear",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": 2023
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0rori2hau6orjn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ltfj585z",
    "name": "releaseyear",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 2023
    }
  }))

  return dao.saveCollection(collection)
})
