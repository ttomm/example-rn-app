export class DriverApiClient {
    async getVehiclesList(searchParam = '') {

        return await fetch(`https://dev-mobileapi.motoflota.pl/pl/api-driver/v1/vehicles?search=${searchParam}`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MjUwNTI2MzQsImV4cCI6MTc1NjU4ODYzNCwianRpIjoiQzBPcEFFQ281TWxoNVF3dyIsInN1YiI6IjMiLCJwaG9uZSI6IjUwMTgzMzI5OCJ9.LyhXY5E5J-VaBswSO0LgSD4_I7xffctbLe64FQNwf5o'
            }
        });
    }
}