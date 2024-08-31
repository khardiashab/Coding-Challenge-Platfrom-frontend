import { atom } from "recoil";
import { recoilPersist} from "recoil-persist";

const { persistAtom } = recoilPersist()

type AuthModalState = {
    isOpen : boolean;
    type  : "login" | "register" | "forgotPassword";
    
};

const initalAuthModalState : AuthModalState = {
    isOpen : false,
    type : "login",
};

export const authModalState = atom<AuthModalState>({
    key :"authModalState",
    default : initalAuthModalState,
    effects_UNSTABLE: [persistAtom],
});