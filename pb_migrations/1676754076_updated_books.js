migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0rori2hau6orjn")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g0rori2hau6orjn")

  collection.listRule = null

  return dao.saveCollection(collection)
})
