import { UserDTO } from './../models/IUser';
import createAxiosClient from '../conf/axiosInstance';
import { AxiosInstance } from 'axios';

const resourceVenueWorkers: string = 'manageUserVenue/getVenueWorkers';

class UserVenueService {
    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = createAxiosClient();
    }

    async getVenueByToken(id: number): Promise<Array<UserDTO>> {
        const response = await this.axiosClient.get(
            `/${resourceVenueWorkers}/${id}`
        );
        return response.data;
    }
}

export default UserVenueService;
