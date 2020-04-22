import CoreRouter from '../../helpers/router'
import Projects from './controllers'
import { paths } from './constants'

class ProjectsRouter extends CoreRouter {
    constructor() {
        super();
        this.declareRoutes();
    }

    private declareRoutes() {
        this.router.get(paths.GET_ALL, Projects.getAll)
        this.router.get(paths.GET_ONE, Projects.getOne)
        this.router.post(paths.CREATE_ONE, Projects.createOne)
        this.router.delete(paths.DELETE_ONE, Projects.deleteOne)
        this.router.put(paths.UPDATE_ONE, Projects.updateOne)
    }
}
export default new ProjectsRouter