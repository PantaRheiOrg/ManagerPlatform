# Axios Connection Example

```typescript
import UserService from '../../services/user.service';
import { UserLoginDTO } from '../../models/IUser';
```


```typescript
useEffect(() => {
        const service = new UserService();
        const login: UserLoginDTO = {
            email: 'guilhermecm@sapo.pt',
            password: 'Admin12345!',
        };
        service.postAuthenticate(login).then((response) => {
            console.log(response);
        });
    }, []);
```