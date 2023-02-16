migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ll6w8qn7tn65bz")

  // remove
  collection.schema.removeField("91mrer24")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ll6w8qn7tn65bz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "91mrer24",
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
