import * as express from 'express'
import * as morgan from 'morgan'
import * as serveStatic from 'serve-static'


const app = express()
app.use(morgan("dev"))

app.get('/api/test', (req, rsp) => rsp.status(200).json({ message: "OK" }).end())


app.use(serveStatic('static'))
app.listen(9201, () => {
    console.log(`Server is litening on url http://localhost:9201/`)
})
