import jwt from 'jsonwebtoken';

type TokenPayload = { id: number, username: string };

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const sign = (payload:TokenPayload): string => jwt.sign(payload, JWT_SECRET);

const verify = (token: string): TokenPayload => jwt.verify(token, JWT_SECRET) as TokenPayload;

export default { sign, verify };