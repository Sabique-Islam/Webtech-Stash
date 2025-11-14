
### Middleware is a function that takes HTTP request and response object, plus the next middleware function in the chain.



### Middleware functions are funcs that have access to

- request object (req)
- response object (res)
- next function that application request-response cycle


### Express application can use the following types of middleware:
- Application-level middleware : app.use() : Logging, authentication (works on all routes)
- Router-level middleware : router.use() : group routes (works on specific routes)
- Error-handling middleware : app.use(err, req, res, next) : Handle errors
- Built-in middleware : express.json() : Parse data, express.static() : Serve static files
- Third-party middleware : body-parser, cookie-parser : Parse request bodies, cookies [morgan, cors: Logging,security]