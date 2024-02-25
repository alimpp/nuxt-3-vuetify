import { useToast } from "vue-toastification"
const toast = useToast();

export const Success = (position: any, text: string) => {
    toast.success(text, {
        position: position,
        timeout: 3000,
        hideProgressBar: false,
    });
}

export const Warning = (position: any, text: string) => {
    toast.warning(text, {
        position: position,
        timeout: 3000,
        hideProgressBar: false,
    });
}

export const Error = (position: any, text: string) => {
    toast.error(text, {
        position: position,
        timeout: 3000,
        hideProgressBar: false,
    });
}