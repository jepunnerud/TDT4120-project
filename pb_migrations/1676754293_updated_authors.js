migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ll6w8qn7tn65bz")

  collection.viewRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ll6w8qn7tn65bz")

  collection.viewRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
