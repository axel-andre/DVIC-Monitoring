import { Request, Response } from "express"
import ProjectModel from './model'


async function getAll(req: Request, res: Response) {
    try {
        let AllProjects = await ProjectModel.find().populate('client');
        return res.send(AllProjects).status(200);
    } catch (e) {
        res.status(500).send(e);
        throw new Error(e);
    }
}
async function getOne(req: Request, res: Response) {
    try {
        const project = await ProjectModel.findOne({ _id: req.params.id }).populate('client');
        return res.send(project).status(200);
    } catch (e) {
        res.status(500).send(e);
        throw new Error(e);
    }
}
async function createOne(req: Request, res: Response) {
    const newProject = new ProjectModel(req.body);
    try {
        let createdProject = await newProject.save();
        createdProject = await createdProject.populate("client").execPopulate();
        return res.send(createdProject).status(201);
    } catch (e) {
        res.status(500).send(e);
        throw new Error(e);
    }
}
async function updateOne(req: Request, res: Response) {
    try {
        const updatedProject = await ProjectModel.updateOne({ _id: req.params.id }, req.body).populate('client');
        return res.send(updatedProject).status(200);
    } catch (e) {
        res.status(500).send(e);
        throw new Error(e);
    }
}
async function deleteOne(req: Request, res: Response) {
    try {
        const deletedProject = await ProjectModel.deleteOne({ _id: req.params.id })
        return res.send(deletedProject).status(200);
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