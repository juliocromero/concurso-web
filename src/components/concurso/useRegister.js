import { ref } from "vue"

const useRegister =  (init) => {
        const isRegister = ref(init)
        return {isRegister}
}
export default useRegister