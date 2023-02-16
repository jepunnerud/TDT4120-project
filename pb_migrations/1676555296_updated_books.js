migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0rori2hau6orjn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vicljp9e",
    "name": "rating",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 5
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u4hfqxn5",
    "name": "autor",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "4ll6w8qn7tn65bz",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": [
        "name"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0rori2hau6orjn")

  // remove
  collection.schema.removeField("vicljp9e")

  // remove
  collection.schema.removeField("u4hfqxn5")

  return dao.saveCollection(collection)
})
