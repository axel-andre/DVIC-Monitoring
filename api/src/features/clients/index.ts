import CoreRouter from '../../helpers/router'
import Client from './controllers'
import { paths } from './constants'
class ClientRouter extends CoreRouter {
    constructor() {
        super();
        this.declareRoutes();
    }


    private declareRoutes() {
        this.router.get(paths.GET_ALL, Client.getAll)
        this.router.get(paths.GET_ONE, Client.getOne)
        this.router.post(paths.CREATE_ONE, Client.createOne)
        this.router.put(paths.UPDATE_ONE, Client.updateOne)
        this.router.delete(paths.DELETE_ONE, Client.deleteOne)
    }
}
export default new ClientRouter