migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ll6w8qn7tn65bz")

  // remove
  collection.schema.removeField("y8szzot1")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ll6w8qn7tn65bz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y8szzot1",
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
