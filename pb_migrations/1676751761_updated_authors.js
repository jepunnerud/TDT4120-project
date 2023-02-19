migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ll6w8qn7tn65bz")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ll6w8qn7tn65bz")

  collection.createRule = null

  return dao.saveCollection(collection)
})
