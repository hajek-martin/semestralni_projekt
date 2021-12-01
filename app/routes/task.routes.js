module.exports = app => {
    const tasks = require("../controllers/tasks.controller.js");
  
    var router = require("express").Router();
  
    // Create a new user
    router.post("/", tasks.create);
  
    // Retrieve all users
    router.get("/", tasks.findAll);
  
    // Retrieve a single user with id
    router.get("/:id", tasks.findOne);
  
    // Update a user with id
    router.put("/:id", tasks.update);
  
    // Delete a user with id
    router.delete("/:id", tasks.delete);
  
    // Delete all user
    router.delete("/", tasks.deleteAll);
  
    app.use('/api/tasks', router);
  };
  