const logger = (req,res,next) => {
    const data = `Request: ${req.method} ${req.url}`;
    console.log(data);
    next();
}

export default logger;