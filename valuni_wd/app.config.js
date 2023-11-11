import 'dotenv/config';
export default{
    extra:
    {
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        databaseURL: process.env.databaseURL,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.measurementId,
        appId: process.env.appId,
        measurementId: process.env.measurementId
    }
}
