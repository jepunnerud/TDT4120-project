migrate((db) => {
  const collection = new Collection({
    "id": "g0rori2hau6orjn",
    "created": "2023-02-16 13:45:05.348Z",
    "updated": "2023-02-16 13:45:05.348Z",
    "name": "books",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ujkdgs4x",
        "name": "title",
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
        "id": "9mzxdfi1",
        "name": "description",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 200,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ltfj585z",
        "name": "releaseyear",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 2023
        }
      },
      {
        "system": false,
        "id": "kyssagty",
        "name": "genre",
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
        "id": "xv8cokqe",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/png",
            "image/jpeg"
          ],
          "thumbs": []
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
  const collection = dao.findCollectionByNameOrId("g0rori2hau6orjn");

  return dao.deleteCollection(collection);
})
