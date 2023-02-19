migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ll6w8qn7tn65bz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cqs4o4jz",
    "name": "name",
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
  const collection = dao.findCollectionByNameOrId("4ll6w8qn7tn65bz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cqs4o4jz",
    "name": "name",
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
