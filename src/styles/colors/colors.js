export default {
    darkViolet: '#311D3F',
    violet: '#522546',
    darkMagenta: '#88304E',
    pink: '#E23E57',
    white: '#FFFFFF',
    ice: '#EEEEEE',
    gray: '#cccccc',
    yellow: "#FFDA64",
    black: '#000000',
    icon: "#ff82ab",
    fullstack: {
        primary: "#5e32f2",
        secundary: "#D450E6",
        icon: "#ef7dff"
    },
    frontEnd: {
        primary: "#FF4BA7",
        secundary: "#FFDA64",
        icon: "#ffeeb6"
    },
    backEnd: {
        primary: "#09af58",
        secundary: "#3CCBFF",
        icon: "#9de5ff"
    },
    tester: {
        primary: "#6F085A",
        secundary: "#FE3D6C",
        icon: "#ff82ab"
    },
    progress: {
        classified: {
            init: "#00FFED",
            final: "#00B8BA",
        },
        progress: { 
            init: "#FFCF1B",
            final: "#FF881B",
        },
        declassified: {
            init: "#FF512F",
            final: "#C70030",
        },
    },
    phase: {
        progress: "#FFDA64",
        classified: "#B3EB50",
        declassified: "#6F085A",
        noProgress: "#cccccc",
    }
}
const BACKEND = "Back-End"
const FRONTEND = "Front-End"
const TESTER = "Tester"
const FULLSTACK = "FullStack"

export const color = ( job ) => {
    switch (job) {
        case BACKEND:
            return { 
                primary: "#09af58",
                secundary: "#3CCBFF",
                icon: "#9de5ff"
            }          
        case FRONTEND:
            return {
                primary: "#FF4BA7",
                secundary: "#FFDA64",
                icon: "#ffeeb6"
            }  
        case TESTER:
            return {
                primary: "#6F085A",
                secundary: "#FE3D6C",
                icon: "#ff82ab"
            }
        case FULLSTACK:
            return {
                primary: "#5e32f2",
                secundary: "#D450E6",
                icon: "#ef7dff"
            }
        default:
            return {
                primary: "#311D3F",
                secundary: "#E23E57",
                icon: "#ff7d90"
            }
    }   
}