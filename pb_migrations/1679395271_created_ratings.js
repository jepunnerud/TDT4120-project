migrate((db) => {
  const collection = new Collection({
    "id": "ci3vx3tioybg0zq",
    "created": "2023-03-21 10:41:11.136Z",
    "updated": "2023-03-21 10:41:11.136Z",
    "name": "ratings",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cal3w6dx",
        "name": "book_id",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "3gt3hase",
        "name": "user_id",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ovqor4gn",
        "name": "rating",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "6d64yizk",
        "name": "review",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
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
  const collection = dao.findCollectionByNameOrId("ci3vx3tioybg0zq");

  return dao.deleteCollection(collection);
})
