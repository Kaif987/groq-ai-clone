import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 8080;

function main() {
    // health check
    app.get('/', (req: Request, res: Response) => {
        res.send('Server is running');
    });

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

main()