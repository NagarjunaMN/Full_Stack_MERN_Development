const router = require('express').Router();
const projController = require('./projectController')

router.get('/',projController.getList)

router.post('/',projController.insertProject)

router.get('/:alias',projController.getProject)

router.put('/:alias',projController.updateProject)

router.delete('/:alias',projController.deleteProject)

module.exports = router