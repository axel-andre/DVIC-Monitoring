import { Request, Response } from "express"
import ClientModel from './model'

interface Client {
    name: string,
    email: string,
    address?: string
}
async function getAll(req: Request, res: Response) {
    try {
        const AllClients = await ClientModel.find();
        return res.send(AllClients).status(200);
    } catch (e) {
        res.status(500).send(e);
        throw new Error(e);
    }
}
async function getOne(req: Request, res: Response) {
    try {
        const client = await ClientModel.findOne({ _id: req.params.id });
        return res.send(client).status(200);
    } catch (e) {
        res.status(500).send(e);
        throw new Error(e);
    }
}
async function createOne(req: Request, res: Response) {
    const sentRequest: Client = req.body;
    const newClient = new ClientModel(sentRequest);
    try {
        const createdClient = await newClient.save();
        return res.send(createdClient).status(201);
    } catch (e) {
        res.status(500).send(e);
        throw new Error(e);
    }
}
async function updateOne(req: Request, res: Response) {
    const sentRequest: Client = req.body;
    try {
        const updatedClient = await ClientModel.updateOne({ _id: req.params.id }, sentRequest);
        return res.send(updatedClient).status(200);
    } catch (e) {
        res.status(500).send(e);
        throw new Error(e);
    }
}
async function deleteOne(req: Request, res: Response) {
    try {
        const deletedClient = await ClientModel.findOneAndDelete({ _id: req.params.id })
        return res.send(deletedClient).status(200);
    } catch (e) {
        res.status(500).send(e);
        throw new Error(e);
    }
}

export default {
    getAll,
    createOne,
    getOne,
    deleteOne,
    updateOne
}