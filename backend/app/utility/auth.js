import jwt from 'jsonwebtoken';

export function isLoggedIn(req){
    try{
        const token = req.cookies.accessToken;
        const payload = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        return payload;
    }
    catch(e){
        console.log('not logged in');
        return null;
    }
}