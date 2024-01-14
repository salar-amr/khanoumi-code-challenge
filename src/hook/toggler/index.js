import { useEffect, useState } from "react"

const useToggler = ({visInitial = true, selector}) => {

    const [vis, setVis] = useState(visInitial)

    const toggler = () => {
        setVis(prvs => !prvs)
    }

    useEffect(() => {
        const elm = document.querySelector(selector)
        if(elm) {
        elm.hidden = vis
        }
    }, [vis])

    return [vis, toggler]

}

export default useToggler