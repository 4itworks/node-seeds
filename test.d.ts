export type TOKEN<T> = Symbol & { __type: T };

interface Foo<T, Request, Response> {
    token: TOKEN<T>,
    request: Request,
    response: Response,
    type: T
}


type createEvent<T, Request, Response> = (request: Request, response: Response) => Event<T, Request, Response>;