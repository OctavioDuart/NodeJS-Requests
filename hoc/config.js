const key_address = `&sensor=false&key=[YOUR KEY API]`;
const route_address = `https://maps.googleapis.com/maps/api/geocode/json?latlng=`;
const route_gas_station = `https://maps.googleapis.com/maps/api/place/search/json?location=`;
const key_gas_station = `&radius=10000&type=gas_station&key=[YOUR KEY API]`;

module.exports = {
    route_gas_station,
    key_gas_station,
    route_address,
    key_address
}
