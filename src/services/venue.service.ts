import { VenueDTO } from './../models/IVenue';
import createAxiosClient from '../conf/axiosInstance';
import { AxiosInstance } from 'axios';

const resourceVenueByToken: string = 'venue/byToken';

class VenueService {
    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = createAxiosClient();
    }

    async getVenueByToken(): Promise<VenueDTO> {
        const response = await this.axiosClient.get(resourceVenueByToken);
        return response.data;
    }
}

export default VenueService;
