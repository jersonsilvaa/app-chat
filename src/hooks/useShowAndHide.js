import { useState } from "react"
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const useShowAndHide = () => {
    const [show, setShow] = useState(false)

    const toggleBtn = () => {
        setShow(preState => !preState)
    }

    return {
        toggleBtn,
        show,
        FaEye,
        FaEyeSlash
    }
}

export default useShowAndHide