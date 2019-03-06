const axios = require('axios');
const routes = require('express').Router();
const data_address = require('./hoc/object_address');
const { route_address,
    key_address,
    route_gas_station,
    key_gas_station } = require('./hoc/config');

routes.get('/find/address', (req, res) => {

    const request_address = new Promise((resolve, reject) => {

        var arr = [];
        const lat = req.body.lat;
        const lng = req.body.lng;
        const url = `${route_address + lat + ',' + lng + key_address}`;

        axios.get(url)
            .then((response) => {
                if (response.statusText === 'OK' && response.status === 200)
                    return response.data.results[0].address_components;
            })
            .then(response => {
                response.map((item, i) => {
                    if (i !== 5) {
                        if (i === 4) {
                            arr.push(item.short_name);
                        }
                        else {
                            arr.push(item.long_name);
                        }
                    }
                });
            })
            .then(() => {
                data_address.lat = lat;
                data_address.lng = lng;
                data_address.endereco.estado = arr[4];
                data_address.endereco.cidade = arr[3];
                data_address.endereco.bairro = arr[2];
                data_address.endereco.logradouro = arr[1];
                data_address.endereco.numero = arr[0];
                data_address.endereco.cep = arr[5];
                resolve(data_address);
            })

            .catch(error => {
                reject(error);
            });
    });

    const request_gas_station = new Promise((resolve, reject) => {

        var postos = [];
        const lat = req.body.lat;
        const lng = req.body.lng;
        const url = `${route_gas_station + lat + ',' + lng + key_gas_station}`;

        axios.get(url)
            .then((response) => {
                if (response.statusText === 'OK' && response.status === 200)
                    return response.data.results;
            })
            .then(response => {
                response.map((item, i) => {
                    postos.push(
                        {
                            lat: item.geometry.location.lat,
                            lng: item.geometry.location.lng,
                            nome: item.name,
                            endereco: item.vicinity
                        }
                    )

                });
            })
            .then(() => {
                if (postos.length === 0) {
                    resolve({ mensagem: 'Não há postos de combustiveis abertos no momento' });
                }
                else {
                    const postos_result = { postos }
                    resolve(postos_result);
                }
            })
            .catch(error => {
                reject(error);
            });
    });

    Promise
        .all([request_address, request_gas_station])
        .then(result => {
            const data = Object.assign(result[0], result[1]);
            return res.status(200).send(data);
        })
        .catch(error => {
            return res.status(500).send(`Ocorreu um erro na requisição: ${error}`);
        });
});

module.exports = routes;
