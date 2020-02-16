/**
 *  NextJS Server
 * 
 *  Using Express
 */

const express = require('express');
const next = require('next');

 const dev = process.env.NODE_ENV !== "production";
 const app = next({ dev });
 const handle = app.getRequestHandler();


app.prepare().then(() => {
    const server = express();
    /**
     *  [1] server.get("*", (req, res)) => {}
     *  
     *   기존적으로 next의 커맨드 명령이다.
     *   package.json 에서 사용되는 next명령어는 req, res를 리턴함.
     *   우리의 node 명령어를 다음과 같이 수정한다.
     *   "dev": "next dev"       ->      "dev": "node server.js"
     *   "start": "next start"   ->      "start": "NODE_ENV=production" 
     */
    server.get("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, err => {
        if(err) throw err;
        console.log("> Ready on http://localhost:3000");
    })
}).catch(ex => { 
    /**
     *  서버 연결에 에러가나면, 서버를 내려준다.
     */
    console.log(ex.stack);
    process.exit(1);
});