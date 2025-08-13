
import {Request, Response, NextFunction } from "express"

type AsyncHandler = (req: Request, res: Response, next: NextFunction) => Promise<any>;

const exception = (fn:AsyncHandler) => (req: Request, res: Response, next: NextFunction) =>{
    Promise.resolve(fn(req, res, next)).catch((err:any)=>{
        const statusCode = err.statusCode || 500;
        const message = process.env.NODE_ENV === "dev"
            ? err.message
            : "Something went wrong, Please try after sometime";

        res.status(statusCode).json({ message });
    })
}

export default exception