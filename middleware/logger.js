const logger = (req,res,next) => {
    const data = `Request: [${new Date().toISOString().replace("T"," ").slice(0,19)}] ${req.method} ${req.url}`;
    console.log(data);
    next();
}

export default logger;