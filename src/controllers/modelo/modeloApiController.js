import ModeloController from './modeloController.js';

const getAll = async (req, res) => {
    
    res.json(datos);
}

const createNew = async (req, res) => {
    
    res.json({ message: 'ok' });
}

export default {
    getAll,
    
}