migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0rori2hau6orjn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u4hfqxn5",
    "name": "autor",
    "type": "relation",
    "required": false,
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

  // update
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
})
