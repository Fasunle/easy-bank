// Navigation Styles

export const navItemStyles = {
    "justifyContent": "space-around", 
    "width": "50%", 
    "maxW": "calc(100vw - 60vw)",
    "display": {
        "sm": "none",
        "lg": "flex"
    }
}

export const inviteLinkStyles = {
    "display": {
        "sm": "none",
        "lg": "flex"
    }
}

export const navConatinerStyles = {
    "alignItems": "center", 
    "h": "4em",
    "justifyContent":{
        "sm": "space-between",
        "lg": "space-around"
    }
}

export const hamburgerIconStyle = {
    aspectRatio: "1",
    bg: "transparent",
    h: "100%", 
    padding: "0.5em",
    display: {
        lg: "none"
    },
    _hover: {
        bg: "gray.50"
    }
}


export const menuListItems = {
    "position": "absolute",
    "height": "400px",
    "display": {
        "sm": "flex",
        "lg": "none"
    },
    "flexDirection": "column",
    "justifyContent": "space-around",
    "alignItems": "center",
    "bg": "white",
    "inset": "1rem",
    "top": "4rem", 
    "boxShadow": "7px 2px 17px 3px #CEDBF5",
    "borderRadius": "5px",
    "zIndex": "10"
}

export const btnWithGradientStyle = {
    textAlign: "center",
    padding: "1em 3em",
    transition: "0.3s",
    borderRadius: "100px",
    boxShadow: "7px 3px 20px #eee",
    color: "white",
    fontWeight: "600",
    opacity: "0.7",
    bgGradient:"linear(to-br, hsl(136, 65%, 51%) 0, hsl(192, 70%, 51%) 100%)",
    _hover: {
        opacity: "0.5",
        transform: "scale(1.05)"
    }
}
