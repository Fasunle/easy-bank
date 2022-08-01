


export const btnWithGradientStyle = {
    padding: "1em 3em",
    transition: "0.3s",
    borderRadius: "100px",
    color: "white",
    fontWeight: "600",
    opacity: "0.7",
    bgGradient:"linear(to-br, hsl(136, 65%, 51%) 0, hsl(192, 70%, 51%) 100%)",
    _hover: {
        opacity: "0.5",
        transform: "scale(1.05)"
    }
}



export const desktopSectionConatainer = {
    maxH: "max-content",
    "gridTemplateColumns": "repeat(12, 1fr)",
    "gap": "1rem",
    "h": "400px",
    "display": {
        "sm": "none",
        "lg": "grid"
    }
}

export const mobileSectionConatainer = {
    'display': {
        'sm': 'flex',
        'md': 'none'
    }
}