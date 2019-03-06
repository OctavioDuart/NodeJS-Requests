# NodeJS-Requests
Request Google Maps API With NodeJS

                                        
                                        
                                        Intruções antes de iniciar o serviço :
 
1º Passo : 

Com o terminal aberto digite : git clone https://github.com/OctavioDuart/NodeJS-Requests.git . 

Isso fará com que o projeto seja baixado no diretório onde o prompt foi aberto .


2º Passo : 

Instale as dependências navegando até o nível do arquivo package.json e digitando o comando npm i , aguarde o log informando que tudo foi instalado . 


3º Passo :

Insira a chave de segurança do Google no arquivo config.js que esta no diretório hoc. As requisições não serão realizadas com sucesso se isso não for feito.Você pode ver as instruções de como gerar a chave neste site https://developers.google.com/maps/documentation/embed/get-api-key) .


4º Passo : 

Inicie o servidor digitando o comando node app.js .



                                               Feito Isso ...
                                               
As requisições ja podem ser testadas um exemplo seria : 


                                      Route: http://localhost:8000/find/address

                                      Body:   {
                                            "lat": "-19.942899",
                                            "lng": "-44.012286"
                                        }

____________________________________________________________________________________________________________________________
Saída :

                      {
                        "lat": "-19.942899",
                        "lng": "-44.012286",
                        "endereco": {
                            "estado": "BR",
                            "cidade": "Minas Gerais",
                            "bairro": "Belo Horizonte",
                            "logradouro": "Camargos",
                            "numero": "Rua Socrates Alvim 55"
                        },
                        "postos": [
                            {
                                "lat": -19.8717347,
                                "lng": -43.97979730000001,
                                "nome": "ECO EMPREENDIMENTOS COMERCIAIS LTDA",
                                "endereco": "Rua Conceição do Mato Dentro, 335 - Ouro Preto, Belo Horizonte"
                            },
                            {
                                "lat": -19.9361134,
                                "lng": -43.93245539999999,
                                "nome": "Posto AEL São José",
                                "endereco": "Rua Rio Grande do Norte, 1204 - Savassi, Belo Horizonte"
                            },
                            {
                                "lat": -19.9061534,
                                "lng": -43.9757668,
                                "nome": "Posto Petrobras",
                                "endereco": "Rua Belmiro Braga, 1078 - Caiçara, Belo Horizonte"
                            },
                            {
                                "lat": -19.93891,
                                "lng": -43.94416,
                                "nome": "Posto Mustang",
                                "endereco": "Rua Joaquim Murtinho, 9 - Santo Antônio, Belo Horizonte"
                            },
                            {
                                "lat": -19.9074471,
                                "lng": -43.9627888,
                                "nome": "Shell",
                                "endereco": "Avenida Presidente Carlos Luz, 102 - Pedro II, Belo Horizonte"
                            },
                            {
                                "lat": -19.9486533,
                                "lng": -44.0111661,
                                "nome": "Posto Petrobras - GNV",
                                "endereco": "Praça Louis Ensch, 40 - Cidade Industrial, Contagem"
                            },
                            {
                                "lat": -19.9215609,
                                "lng": -43.9672656,
                                "nome": "Posto Shell - Posto Phoenix Ltda",
                                "endereco": "Rua Platina, 999 - Calafate"
                            },
                            {
                                "lat": -19.9439737,
                                "lng": -43.9346927,
                                "nome": "Posto Shell - Posto Ponte Nova",
                                "endereco": "Avenida Nossa Senhora do Carmo, 450 - Carmo, Belo Horizonte"
                            },
                            {
                                "lat": -19.9304347,
                                "lng": -43.9290649,
                                "nome": "Petrobel Ltda",
                                "endereco": "Avenida Bernardo Monteiro, 1339 - Funcionários, Belo Horizonte"
                            },
                            {
                                "lat": -19.9215358,
                                "lng": -44.05899170000001,
                                "nome": "Posto Pica Pau",
                                "endereco": "Via Expressa de Contagem, 4447 - Parque Sao Joao, Contagem"
                            },
                            {
                                "lat": -19.94821809999999,
                                "lng": -43.9691889,
                                "nome": "Haro Comercio e Importação Ltda",
                                "endereco": "Avenida Barão Homem de Melo, 1409 - Jardim America, Belo Horizonte"
                            },
                            {
                                "lat": -19.9722725,
                                "lng": -43.96719909999999,
                                "nome": "Posto Shell - Posto Estoril Ltda",
                                "endereco": "Avenida Professor Mário Werneck, 1910 - Estoril"
                            },
                            {
                                "lat": -19.9220447,
                                "lng": -43.9654732,
                                "nome": "Posto Shell - Posto Ramadas Ltda",
                                "endereco": "Rua Platina, 789 - Prado, Belo Horizonte"
                            },
                            {
                                "lat": -19.9298262,
                                "lng": -43.9600492,
                                "nome": "Posto Itapoa",
                                "endereco": "Avenida Amazonas, 2994 - Barroca, Belo Horizonte"
                            },
                            {
                                "lat": -19.9384615,
                                "lng": -43.9473321,
                                "nome": "POSTO VIP",
                                "endereco": "Avenida Prudente de Morais, 303 - Santo Antônio, Belo Horizonte"
                            },
                            {
                                "lat": -19.92973139999999,
                                "lng": -43.9386276,
                                "nome": "Posto Lourdes Petrobras",
                                "endereco": "Rua Bernardo Guimarães, 1493 - Lourdes, Belo Horizonte"
                            },
                            {
                                "lat": -19.9323352,
                                "lng": -43.9584389,
                                "nome": "Posto Helcar Ltda",
                                "endereco": "Rua André Cavalcanti, 388 - Gutierrez, Belo Horizonte"
                            },
                            {
                                "lat": -19.9253104,
                                "lng": -43.9988766,
                                "nome": "Posto Ipiranga",
                                "endereco": "Avenida Vereador Cicero Idelfonso, 684 - João Pinheiro, Belo Horizonte"
                            },
                            {
                                "lat": -19.9535643,
                                "lng": -43.99433519999999,
                                "nome": "Posto Shell - Posto Vista Alegre Ltda",
                                "endereco": "Rua Juatuba, 10 - Vista Alegre, Belo Horizonte"
                            },
                            {
                                "lat": -19.89088019999999,
                                "lng": -43.9935557,
                                "nome": "Posto Ipiranga",
                                "endereco": "Avenida Presidente Tancredo Neves, 1095 - Castelo, Belo Horizonte"
                            }
                        ]
                    }


