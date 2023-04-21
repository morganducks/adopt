const PetController = require('../controllers/pet.controller');  

module.exports = (app) => {
    app.post('/adopt/api/pets', PetController.createPet); 
    app.get('/adopt/api/pets', PetController.viewPets); 
    app.get('/adopt/api/pets/:id', PetController.viewOnePet); 
    // app.get('/api/pet/:id', PetController.viewNewPet); 
    app.delete('/adopt/api/pets/:id', PetController.deletePet); 
    app.put('/adopt/api/pets/:id', PetController.updatePet);
}