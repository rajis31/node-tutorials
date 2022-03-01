const db = require("../config/db");

class Post{
    constructor(title, body){
        this.title = title; 
        this.body  = body;
    }

    save(){
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth()+1;
        let dd = d.getDay();

        let createdDate = `${yyyy}-${mm}-${dd}`;
        let sql = `
            INSERT into posts (
                title, 
                body, 
                created_at
            ) VALUES (
                '${this.title}',
                '${this.body}',
                '${createdDate}'
            )
        `
        return db.execute(sql);

    }

    static findAll(){
        let sql = "SELECT * FROM posts;";
        return db.execute(sql);
    }

    static findByID(id){
        let sql = `SELECT * from posts where id=${id}`;
        return db.execute(sql);
    }
}

module.exports = Post;