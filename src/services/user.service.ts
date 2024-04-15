import {
    UserSignUpDTO,
    UserAuthResponse,
    UserDTO,
    UserLoginDTO,
    UserUpdateDTO,
    UserAddDTO,
} from './../models/IUser';
import createAxiosClient from '../conf/axiosInstance';
import { AxiosInstance } from 'axios';

const resourceUser: string = 'user/users';
const resourceAuthenticate: string = 'auth/authenticate';
const resourceRegister: string = 'auth/register';

class UserService {
    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = createAxiosClient();
    }

    async postUser(data: UserAddDTO): Promise<UserSignUpDTO> {
        const response = await this.axiosClient.post(resourceUser, data);
        return response.data;
    }

    async postAuthenticate(data: UserLoginDTO): Promise<UserAuthResponse> {
        const response = await this.axiosClient.post(
            resourceAuthenticate,
            data
        );
        return response.data;
    }

    async postRegister(data: UserSignUpDTO): Promise<UserAuthResponse> {
        const response = await this.axiosClient.post(resourceRegister, data);
        return response.data;
    }

    async get(id: number | null): Promise<string | UserDTO[] | UserDTO> {
        const response = await this.axiosClient.get(`/${resourceUser}/${id}`);
        return response.data;
    }

    async put(data: UserUpdateDTO): Promise<string | UserDTO> {
        const response = await this.axiosClient.put(`/${resourceUser}`, data);
        return response.data;
    }

    async delete(id: number): Promise<string> {
        const response = await this.axiosClient.delete(
            `/${resourceUser}/${id}`
        );
        return response.data;
    }
}

export default UserService;
