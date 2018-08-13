function botaoImportar() {
    //Verifica se já foi criada uma tabela anteriormente e remove caso já exista
    if (document.getElementsByTagName('table')[0] != null){
        var tabela = document.getElementsByTagName('table')[0];
        tabela.remove();
    }

    //Cria uma nova tabela com novo conteúdo
    var body = document.getElementsByTagName('body')[0];
    var div = document.createElement('div'); //Cria Elemento Div para adição da Table
    div.className="tabela"; //Define a classe do Elemento Div criado
    div.style.overflow="auto"; //Define a adição de Scroll como automática no elemento Div criado
    var tbl = document.createElement('table'); //Cria Elemento Table
    tbl.className = "table table-striped table-bordered"; //Define a Classe do Elemento Table
    var tabelaCorpo = document.createElement('tbody'); //Cria elemento tbody que ficará em Table
    var stringExemplo = document.getElementById("texto").value //Carrega variável com todo texto digitado pelo usuário em textarea
    resultado = stringExemplo.split("\n"); //Divide o texto do usuário em um Array de acordo com as linhas
    for(var i = 0; i < resultado.length; i++) { //Laço 'for' para varrer todo o Array
        resultado1 = resultado[i].split("	"); //Divide o Array de acordo com o espaçamento entre os elementos
        if(i == 0) //Caso esteja varrendo a primeira linha será definido o cabeçalho da table
        {
            var tr = document.createElement('tr'); //Cria o Elemento 'TR'
            for(var j = 1; j <= resultado1.length; j++) //Laço 'for' para criar a quantidade correta de colunas de acordo com o array resultado1
            {
                var ColunaName = document.createElement('th'); //Cria o Elemento 'TH'
                var textoColunaName = document.createTextNode("Coluna " + j); //Cria o nome da Coluna
                ColunaName.appendChild(textoColunaName); //Adiciona o nome da coluna ao elemento 'TH' criado anteriormente
                tr.appendChild(ColunaName); //Adiciona o Elemento 'TH' ao elemento 'TR'
                tabelaCorpo.appendChild(tr); //Por fim adiciona o elemento 'TR' a 'TABLE'
            }
        }
        var tr1 = document.createElement('tr'); //Cria o Elemento 'TR'
        for(var j = 0; j < resultado1.length; j++) { //Laço 'for' para varrer todo o Array resultado1 que contêm os elementos de cada coluna
            if(resultado1.length != 1) //Verifica se existe mais de um elemento dentro do Array resultado1
            {
                var Coluna = document.createElement('td'); //Cria o Elemento 'TD'
                var textoColuna = document.createTextNode(resultado1[j]); //Cria a string com o conteúdo do Array resultado1
                Coluna.appendChild(textoColuna); //Adiciona a string ao elemento 'TD' criado anteriormente
                tr1.appendChild(Coluna); //Adiciona o elemento 'TD' ao elemento 'TR'
                tabelaCorpo.appendChild(tr1); //Adiciona o elemento 'TR' a 'TABLE'
            }
        }
    }
    tbl.appendChild(tabelaCorpo); //Adiciona todo o corpo da 'TABLE' a 'TABLE'
    div.appendChild(tbl); //Adiciona a 'TABLE' na div criada no inicio
    body.appendChild(div); //Adiciona a div no Body que foi chamada no início
}