migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ll6w8qn7tn65bz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u13xatpu",
    "name": "books",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "g0rori2hau6orjn",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": [
        "title"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ll6w8qn7tn65bz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u13xatpu",
    "name": "books",
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

  return dao.saveCollection(collection)
})
