migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0rori2hau6orjn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k7jztrns",
    "name": "professionalRating",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0rori2hau6orjn")

  // remove
  collection.schema.removeField("k7jztrns")

  return dao.saveCollection(collection)
})
