import { useUser } from "@/context/UserContext";
import type { UpdateUserPayload, UserPayload } from "@/types";
import customFetch from "@/utils/axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useLoginUser = () => {

    const { setUser } = useUser();
    return useMutation({
        mutationFn: async (user: UserPayload) => {
            const response = await customFetch.post('/auth/login', user);
            return response.data;
        },
        onSuccess: (data) => {
            setUser(data.user)
            toast.success(`Welcome Back ${data.user.name}`)
        },

        onError: (error: any) => {
            toast.error(error.response?.data?.msg || "Login failed");
        }
    })
}

export const useRegisterUser = () => {
    const { setUser } = useUser()
    return useMutation({
        mutationFn: async (user: UserPayload) => {
            const response = await customFetch.post('/auth/register', user);
            return response.data;
        }
        ,
        onSuccess: (data) => {
            setUser(data.user)
            toast.success(`Hello There ${data.user.name}`)
        },

        onError: (error: any) => {
            toast.error(error.response?.data?.msg || "Something went wrong");
        }
    })
}

export const useUpdateUser = () => {
    const { setUser, user: savedUser } = useUser()
    return useMutation({
        mutationFn: async (user: UpdateUserPayload) => {
            const response = await customFetch.patch('/auth/updateUser', user, {
                headers: {
                    Authorization: savedUser?.token
                        ? `Bearer ${savedUser.token}`
                        : "",
                }
            });
            return response.data;
        },
        onSuccess: (data) => {
            setUser(data.user)
            toast.success('User Updated!');
        },

        onError: (error: any) => {
            toast.error(error?.response?.data?.msg || 'Update failed. Please try again.'
            );
        }
    })
}

export const useLogoutUser = () => {
    const { clearUser } = useUser();
    const navigate = useNavigate();

    const logout = () => {
        clearUser();
        navigate('/');
    };

    return { logout };
};

