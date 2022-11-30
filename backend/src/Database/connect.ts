import { createConnection } from 'typeorm';

export default createConnection().then(() => console.log('Database is running in port 3306'));
