export default interface IApiContoller<Request, Response> {
       insert(request: Request, response: Response): Promise<Response>;

       update(request: Request, response: Response): Promise<Response>;

       delete(request: Request, response: Response): Promise<Response>;

       findAll(request: Request, response: Response): Promise<Response>;

       findById(request: Request, response: Response): Promise<Response>;
}
