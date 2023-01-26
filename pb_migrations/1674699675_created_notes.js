migrate((db) => {
  const collection = new Collection({
    "id": "9k6ux7pu46p5owv",
    "created": "2023-01-26 02:21:15.179Z",
    "updated": "2023-01-26 02:21:15.179Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kq8pqlvp",
        "name": "title",
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
  const collection = dao.findCollectionByNameOrId("9k6ux7pu46p5owv");

  return dao.deleteCollection(collection);
})
