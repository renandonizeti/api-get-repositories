const axios = require("axios");

module.exports = {
    async pesquisachatbotGitHub(request,response){
        const { username } = request.params;
        await axios.get(`https://api.github.com/users/`+username+`/repos?q=&type=all&language=c%23&sort=created&direction=asc&page=1&per_page=5`).then(function(res){
        console.log(res.data);
            let item = [];

            res.data.forEach((element,index)=> {
                console.log(res.data[index].name);
                console.log(res.data[index].description);
                console.log(res.data[index].owner.avatar_url);
                item.push({
                    name: res.data[index].name,
                    description: res.data[index].description,
                    imagem: res.data[index].owner.avatar_url,
                });
            });


            

            return response.json([
                {"nome1": item[0].name,
                 "descricao1": item[0].description,
                 "imagem1": item[0].imagem},
                {"nome2": item[1].name,
                "descricao2": item[1].description,
                "imagem2": item[1].imagem},
                {"nome3": item[2].name,
                "descricao3": item[2].description,
                "imagem3": item[2].imagem},
                {"nome4": item[3].name,
                "descricao4": item[3].description,
                "imagem4": item[3].imagem},
                {"nome5": item[4].name,
                "descricao5": item[4].description,
                "imagem5": item[4].imagem},
                
            ])

            
        }).catch((err) => {
            response.json({msg: "Usuário não encontrado" + err})
        })
    }
}