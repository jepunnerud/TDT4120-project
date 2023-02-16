migrate((db) => {
  const collection = new Collection({
    "id": "4ll6w8qn7tn65bz",
    "created": "2023-02-16 13:47:02.246Z",
    "updated": "2023-02-16 13:47:02.246Z",
    "name": "authors",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
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
          "displayFields": [
            "title"
          ]
        }
      },
      {
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
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4ll6w8qn7tn65bz");

  return dao.deleteCollection(collection);
})
